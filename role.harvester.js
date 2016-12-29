let roleBuilder = require('role.builder');

let roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if (creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');
	    }
	    
	    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('building');
	    }
	    
	    if (!creep.memory.building) {
            let sources = creep.room.find(FIND_SOURCES);

            let closestSource = sources[0];
            let closestDist = 9999;
            
            for (let i = 0; i < sources.length; i++)
            {
                let xDiff = creep.pos.x - sources[i].pos.x;
                let yDiff = creep.pos.y - sources[i].pos.y;

                let dist = Math.abs(xDiff) + Math.abs(yDiff);
                
                if (dist < closestDist)
                {
                    closestDist = dist;
                    closestSource = sources[i];
                }
            }
            
            if (creep.harvest(closestSource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(closestSource);
            }
        }
        else {
            let targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
            else
            {
                roleBuilder.run(creep);
            }
        }
	}
};

module.exports = roleHarvester;