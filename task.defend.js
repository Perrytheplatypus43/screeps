/**
 * Created by zmark_000 on 29/12/2016.
 */

let utils = require('utils');

let defend = {


    defend: function(creep) {

        let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (target) {
            if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
    }
};

module.exports = defend;