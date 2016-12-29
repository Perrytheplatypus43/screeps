/**
 * Created by zmark_000 on 29/12/2016.
 */

let utils = require('utils');

let build = {


    build: function(creep) {

        let buildSite = utils.findFirst(creep, FIND_CONSTRUCTION_SITES);

        if (creep.build(buildSite) == ERR_NOT_IN_RANGE) {
            creep.moveTo(buildSite);
        }
    }
};

module.exports = build;