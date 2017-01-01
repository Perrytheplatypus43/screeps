/**
 * Created by zmark_000 on 29/12/2016.
 */

let creepDefs = require('creepDefs');


const calculateMinCreepAmount = function(room, role) {

    switch (role)
    {
        case 'CARRIER':
            // Need a carrier if there are dropped resources or a container with energy in
            return room.find(FIND_DROPPED_ENERGY).length > 0 || room.find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.energy > 0});
            break;

        case 'BUILDER':
            // Need builder if there's a construction site
            return room.find(FIND_MY_CONSTRUCTION_SITES).length > 0;
            break;

        case 'REPAIRER':
            // Need repairer if there's more than just the spawner and room controller
            return room.find(FIND_MY_STRUCTURES).length > 2;
            break;
    }
};

let roomManager = {

    run: function(room) {

        let flags = room.find(FIND_FLAGS, {filter: (f) => f.name.includes('CS_')});

        for (let i = 0; i < flags.length; i++)
        {
            let flag = flags[i];
            let structType = flag.name.replace(/CS_|\d/g, '').toLowerCase();

            if(flag.pos.createConstructionSite(structType) == 0)
            {
                flag.remove();
            }
        }

        let creepLevel = Math.min(1, Math.floor(room.find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_EXTENSION}).length / 5));

        for (let def in creepDefs[creepLevel])
        {
            let creepDef = creepDefs[creepLevel][def];
            let role = def;

            let creeps = room.find(FIND_MY_CREEPS, {filter: (c) => c.memory.role == role.toLowerCase()});

            let creepTypeMin = creepDef.MIN || calculateMinCreepAmount(room, role);

            if (creeps.length < creepTypeMin && room.energyAvailable >= creepDef.COST)
            {
                let spawn = room.find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_SPAWN})[0];
                let name = spawn.createCreep(creepDef.BODY, undefined, {role: role.toLowerCase()});
                if (typeof name == 'string')
                {
                    console.log(`Spawning ${role} ${name}`);
                    return
                }
            }
        }
    }
};

module.exports = roomManager;