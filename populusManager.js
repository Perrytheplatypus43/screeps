/**
 * Created by zmark_000 on 29/12/2016.
 */

let creepDefs = require('creepDefs');


const calculateMinCreepAmount = function(room, role) {

    switch (role)
    {
        case 'BUILDER':
            return room.find(FIND_MY_CONSTRUCTION_SITES).length > 0;
            break;

        case 'REPAIRER':
            return room.find(FIND_STRUCTURES).length > 0;
            break;
    }
};

let populusManager = {

    run: function(room) {

        let creepLevel = Math.floor(room.find(FIND_STRUCTURES, (s) => s.structureType == STRUCTURE_EXTENSION).length / 5);
        console.log(creepLevel);

        for (let def in creepDefs[creepLevel])
        {
            let creepDef = creepDefs[creepLevel][def];
            let role = def;

            let creeps = room.find(FIND_MY_CREEPS, {filter: (c) => c.memory.role == role.toLowerCase()});

            let creepTypeMin = creepDef.MIN || calculateMinCreepAmount(room);

            if (creeps.length < creepTypeMin && room.energyAvailable >= creepDef.COST)
            {
                let spawn = room.find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_SPAWN})[0];
                spawn.createCreep(creepDef.BODY, undefined, {role: role.toLowerCase()})
            }
        }
    }
};

module.exports = populusManager;