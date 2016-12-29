/**
 * Created by zmark_000 on 29/12/2016.
 */

let utils = require('utils');

let resupply = {


    resupply: function(creep) {

        let energyStore = utils.findNearest(creep, FIND_STRUCTURES, (struct) =>  struct.structureType == STRUCTURE_CONTAINER && struct.store.energy > 100);

        if (!energyStore)
        {
            energyStore = utils.findNearest(creep, FIND_DROPPED_ENERGY);
        }

        if (energyStore)
        {
            if (creep.withdraw(energyStore, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(energyStore);
            }
        }
    }
};

module.exports = resupply;