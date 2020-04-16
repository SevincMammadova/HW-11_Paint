const Model = require("./Model.js");
const View = require("./View.js");
const Controller = require("./Controller.js");

function initProject() {
    const view = new View();
    const model = new Model();
    const controller = new Controller(model, view);

    controller.init();
}

initProject();