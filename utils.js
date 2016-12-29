/**
 * Created by zmark_000 on 29/12/2016.
 */

let utils = {


    findNearestEnergySource: function(creep) {

        let sources = creep.room.find(FIND_SOURCES);

        let closestSource = sources[0];
        let closestDist = 9999;

        for (let i = 0; i < sources.length; i++)
        {
            let xDiff = creep.pos.x - sources[i].pos.x;
            let yDiff = creep.pos.y - sources[i].pos.y;

            let dist = Math.abs(xDiff) + Math.abs(yDiff);

            if (dist < closestDist)
            {
                closestDist = dist;
                closestSource = sources[i];
            }
        }

        return closestSource;
    }
};

module.exports = utils;