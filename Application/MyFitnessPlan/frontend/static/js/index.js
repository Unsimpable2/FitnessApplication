import Home from "./views/Home.js";
import Calculators from "./views/Calculators.js";
import Exercises from "./views/Exercises.js";
import WorkoutPlans from "./views/WorkoutPlans.js";
import Login from "./views/Login.js";
import UserPlace from "./views/UserPlace.js";
import Source from "./views/Source.js";

let loadedscripts = []

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/exercises", view: Exercises },
        { path: "/calculators", view: Calculators },
        { path: "/workoutplan", view: WorkoutPlans },
        { path: "/login", view: Login },
        { path: "/userplace", view: UserPlace },
        { path: "/source", view: Source }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    for(let script of loadedscripts)
    {
        document.body.removeChild(script)
    }

    loadedscripts.length = 0

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
    
    for(let scriptUrl of view.getScripts()){
        let load = document.createElement('script')
        load.src = scriptUrl
        document.body.appendChild(load)
        loadedscripts.push(load)
    }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});