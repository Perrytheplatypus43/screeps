let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let roleRepairer = require('role.repairer');
let roleCarrier = require('role.carrier');
let populusManager = require('populusManager');

module.exports.loop = function () {

    populusManager.run();

    Memory.creeps.harvesters = [];
    Memory.creeps.upgraders = [];
    Memory.creeps.repairers = [];
    Memory.creeps.builders = [];
    Memory.creeps.carriers = [];

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
            Memory.creeps.harvesters.push(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
            Memory.creeps.upgraders.push(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
            Memory.creeps.repairers.push(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
            Memory.creeps.builders.push(creep);
        }
        if(creep.memory.role == 'carrier') {
            roleCarrier.run(creep);
            Memory.creeps.carriers.push(creep);
        }
    }
};