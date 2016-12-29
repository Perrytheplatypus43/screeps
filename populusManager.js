/**
 * Created by zmark_000 on 29/12/2016.
 */

let creepBody = require('creepBody');
let utils = require('utils');

let populusManager = {

    run: function() {

        for(let name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }

        // TODO refactor this more, do it all in a loop

        let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

        if (upgraders.length < 1) {
            console.log('Spawning new upgrader: ' + Game.spawns['SpawnerMcSpawnFace'].createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'}));
        }

        let repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

        if (repairers.length < 1) {
            console.log('Spawning new repairer: ' + Game.spawns['SpawnerMcSpawnFace'].createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'repairer'}));
        }

        let builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

        if (builders.length + repairers.length < 2) {
            console.log('Spawning new builder: ' + Game.spawns['SpawnerMcSpawnFace'].createCreep(creepBody.BUILDER, undefined, {role: 'builder'}));
        }

        let carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier');

        if (carriers.length < 1) {
            console.log('Spawning new carrier: ' + Game.spawns['SpawnerMcSpawnFace'].createCreep(creepBody.CARRIER, undefined, {role: 'carrier'}));
        }

        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

        if (harvesters.length < 1) {
            console.log('Spawning new harvester: ' + Game.spawns['SpawnerMcSpawnFace'].createCreep(creepBody.HARVESTER, undefined, {role: 'harvester'}));
        }
    }
};

module.exports = populusManager;