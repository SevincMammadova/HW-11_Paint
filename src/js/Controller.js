function Controller(view, model) {
    this._view = view;
    this._model = model;
}

Controller.prototype.init = function() {
    this._model.init();
    this._view.init();

    view.drawing();

};





module.exports = Controller;