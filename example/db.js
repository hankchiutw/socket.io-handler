'use strict';

/** mock database for demostration */

class BaseModel {

  constructor(modelName, schema) {
    this.modelName = modelName;
    this._instances = {};
  }

  create(params) {
    params.id = Date.now();
    this._instances[params.id] = params;
    return params;
  }

  update(id, params) {
    if (this._instances[id] === undefined) {
      console.warn('Object not found');
      return;
    }

    Object.keys(params).forEach((key) => {
      this._instances[id][key] = params[key];
    });
  }

  findById(id) {
    return this._instances[id];
  }
}

module.exports = {
  model: function(modelName, schema) {
    return new BaseModel(modelName, schema);
  }
};
