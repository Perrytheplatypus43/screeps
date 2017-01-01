let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let roleRepairer = require('role.repairer');
let roleCarrier = require('role.carrier');
let roleDefender = require('role.defender');
let roleTower = require('role.tower');
let populusManager = require('populusManager');

module.exports.loop = function () {

    /**
     *  Make sure all rooms are having screep populations managed
     */
    for (let name in Game.rooms)
    {
        populusManager.run(Game.rooms[name]);
    }

    /**
     * Remove lingering creeps from memory store, ready to repopulate
     */
    for (let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    Memory.creepTypes = {};
    Memory.creepTypes.harvesters = [];
    Memory.creepTypes.upgraders = [];
    Memory.creepTypes.repairers = [];
    Memory.creepTypes.builders = [];
    Memory.creepTypes.carriers = [];
    Memory.creepTypes.defenders = [];

    const roles = {
        harvester: roleHarvester,
        upgrader: roleUpgrader,
        repairer: roleRepairer,
        builder: roleBuilder,
        carrier: roleCarrier,
        defender: roleDefender
    };

    /**
     * Run roles on each creep and push creep types into appropriate memory locations for easy access through Memory tab
     */
    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        roles[creep.memory.role].run(creep);
        Memory.creepTypes[creep.memory.role + 's'].push(creep);
    }

    /**
     * Run Tower role on all towers
     */
    let towers = _.filter(Game.structures, (s) => s.structureType == STRUCTURE_TOWER);

    for (let tower of towers)
    {
        roleTower.run(tower);
    }
};