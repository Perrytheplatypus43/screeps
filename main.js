let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let roleRepairer = require('role.repairer');

module.exports.loop = function () {

    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    if (upgraders.length < 1) {
        let newName = Game.spawns['SpawnerMcSpawnFace'].createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }

    let repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('Repairers: ' + repairers.length);

    if (repairers.length < 1) {
        let newName = Game.spawns['SpawnerMcSpawnFace'].createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'repairer'});
        console.log('Spawning new repairer: ' + newName);
    }

    let builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

    if (builders.length < 1) {
        let newName = Game.spawns['SpawnerMcSpawnFace'].createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    }

    let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
    
    if (harvesters.length < 5) {
        let newName = Game.spawns['SpawnerMcSpawnFace'].createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
    
    Memory.creeps.harvesters = [];
    Memory.creeps.upgraders = [];
    Memory.creeps.repairers = [];
    Memory.creeps.builders = [];

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
    }
};