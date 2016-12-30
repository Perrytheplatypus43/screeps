/**
 * Created by zmark_000 on 30/12/2016.
 */

let repair = {


    repair: function(creep) {

        if (!creep.memory.repairTarget)
        {
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) =>
                {
                    return (structure.structureType == STRUCTURE_ROAD
                        || structure.structureType == STRUCTURE_CONTAINER
                        || structure.structureType == STRUCTURE_WALL) && structure.hits < structure.hitsMax;
                }
            });

            targets = _.sortBy(targets, 'hits');
            creep.memory.repairTarget = targets[0].id;
        }
        else
        {
            let target = Game.getObjectById(creep.memory.repairTarget);
            if(creep.repair(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
    }
};

module.exports = repair;