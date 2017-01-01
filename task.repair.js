/**
 * Created by zmark_000 on 30/12/2016.
 */

let repair = {


    repair: function(object) {

        if (object.memory && !object.memory.repairTarget)
        {
            let targets = object.room.find(FIND_STRUCTURES, {
                filter: (structure) =>
                {
                    return ((structure.structureType == STRUCTURE_ROAD && structure.hits / structure.hitsMax < 0.9)
                    || (structure.structureType == STRUCTURE_CONTAINER && structure.hits / structure.hitsMax < 0.9)
                    || (structure.structureType == STRUCTURE_WALL && structure.hits < 5000)
                    || (structure.structureType == STRUCTURE_RAMPART && structure.hits / structure.hitsMax < 0.9));
                }
            });

            targets = _.sortBy(targets, 'hits');
            if (targets.length)
            {
                object.memory.repairTarget = targets[0].id;
            }
        }
        else
        {
            let target = (object.memory && object.memory.repairTarget) ? Game.getObjectById(object.memory.repairTarget) : object.room.find(FIND_STRUCTURES, {filter: (s) => s.hits < s.hitsMax})[0];
            
            if(object.repair(target) == ERR_NOT_IN_RANGE) {
                object.moveTo(target);
            }

            if (target && target.hits == target.hitsMax)
            {
                delete object.memory.repairTarget;
            }
        }
    }
};

module.exports = repair;