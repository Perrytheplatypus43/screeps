/**
 * Created by zmark_000 on 29/12/2016.
 */

let creepBody = require('creepBody');

let populusManager = {

    run: function() {

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

        if (harvesters.length < 1) {
            let newName = Game.spawns['SpawnerMcSpawnFace'].createCreep(creepBody.HARVESTER, undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newName);
        }

        let carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier');
        console.log('Carriers: ' + carriers.length);

        if (carriers.length < 1) {
            let newName = Game.spawns['SpawnerMcSpawnFace'].createCreep(creepBody.CARRIER, undefined, {role: 'carrier'});
            console.log('Spawning new carrier: ' + newName);
        }
    }
};

module.exports = populusManager;