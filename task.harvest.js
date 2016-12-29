/**
 * Created by zmark_000 on 29/12/2016.
 */

let utils = require('utils');

let harvest = {


    harvest: function(creep) {

        let closestSource = utils.findNearest(creep, FIND_SOURCES);

        if (creep.harvest(closestSource) == ERR_NOT_IN_RANGE) {
            creep.moveTo(closestSource);
        }
    }
};

module.exports = harvest;