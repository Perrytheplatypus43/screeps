let roleBuilder = require('role.builder');
let task = require('task.harvest');

let roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

        task.harvest(creep);

	}
};

module.exports = roleHarvester;