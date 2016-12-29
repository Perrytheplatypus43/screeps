/**
 * Created by zmark_000 on 29/12/2016.
 */

let utils = require('utils');

let harvest = {


    harvest: function(creep) {

        if (!creep.memory.harvestPointId)
        {
            let occupiedHarvestPoints = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester').map((el) => el.memory.harvestPointId);
            let closestSource = utils.findNearest(creep, FIND_SOURCES, (source) => occupiedHarvestPoints.indexOf(source.id) == -1);
            creep.memory.harvestPointId = closestSource.id;
        }

        let source = Game.getObjectById(creep.memory.harvestPointId);
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    }
};

module.exports = harvest;