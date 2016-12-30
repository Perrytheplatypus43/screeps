let task = {
    upgrade: require('task.upgrade').upgrade,
    resupply: require('task.resupply').resupply
};

let roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
            creep.say('harvesting');
        }

        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
            creep.say('repairing');
        }

        if(creep.memory.repairing) {

            let targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_ROAD 
                        || structure.structureType == STRUCTURE_CONTAINER
                        || structure.structureType == STRUCTURE_WALL) && structure.hits < structure.hitsMax;
                    }
            });
            
            if(targets.length > 0) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
        else {
            task.resupply(creep);
        }
    }
};

module.exports = roleRepairer;