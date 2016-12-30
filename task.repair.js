/**
 * Created by zmark_000 on 30/12/2016.
 */

let repair = {


    repair: function(creep) {

        let targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_ROAD
                    || structure.structureType == STRUCTURE_CONTAINER
                    || structure.structureType == STRUCTURE_WALL) && structure.hits < structure.hitsMax;
            }
        });

        _.sortBy(targets, ['hits']);

        if(targets.length > 0) {
            if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    }
};

module.exports = repair;