let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let roleRepairer = require('role.repairer');
let roleCarrier = require('role.carrier');
let populusManager = require('populusManager');

module.exports.loop = function () {

    populusManager.run();

    Memory.creepTypes = {};
    Memory.creepTypes.harvesters = [];
    Memory.creepTypes.upgraders = [];
    Memory.creepTypes.repairers = [];
    Memory.creepTypes.builders = [];
    Memory.creepTypes.carriers = [];

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
            Memory.creepTypes.harvesters.push(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
            Memory.creepTypes.upgraders.push(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
            Memory.creepTypes.repairers.push(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
            Memory.creepTypes.builders.push(creep);
        }
        if(creep.memory.role == 'carrier') {
            roleCarrier.run(creep);
            Memory.creepTypes.carriers.push(creep);
        }
    }
};