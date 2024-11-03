export default class {
    constructor(params) {
        this.params = params;
    }

    getScripts() {
        return []
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}