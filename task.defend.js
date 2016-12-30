/**
 * Created by zmark_000 on 29/12/2016.
 */

let utils = require('utils');

let defend = {


    defend: function(creep) {

        if (creep.memory.archerSpot)
        {
            creep.moveTo(creep.memory.archerSpot);

            let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (target) {
                creep.rangedAttack(target);
            }

        }
        else
        {
            let pos = creep.pos.findClosestByRange(FIND_FLAGS, {filter: (flag) => flag.name.include("ArcherSpot")}).pos;

            let occupiedArcherSpots = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender').map((el) => el.memory.archerSpot);
            let closestFlag = creep.pos.findClosestByRange(FIND_FLAGS, (flag) => flag.name.includes("ArcherSpot") && occupiedArcherSpots.indexOf(flag.pos) == -1);
            if (closestFlag) creep.memory.archerSpot = closestFlag.pos;
        }


    }
};

module.exports = defend;