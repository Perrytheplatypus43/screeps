/**
 * Created by zmark_000 on 30/12/2016.
 */

let upgrade = {


    upgrade: function(creep) {

        let roomController = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (struct) => struct.structureType == STRUCTURE_CONTROLLER});

        if (roomController)
        {
            if (creep.upgradeController(roomController) == ERR_NOT_IN_RANGE) {
                if (creep.moveTo(roomController, {noPathFinding: true}) == ERR_NOT_FOUND)
                {
                    creep.moveTo(roomController);
                }
            }
        }
    }
};

module.exports = upgrade;