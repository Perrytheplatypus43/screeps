/**
 * Created by zmark_000 on 29/12/2016.
 */

let utils = {

    findNearest: function(creep, thingToFind, filter)
    {
        let targets = creep.room.find(thingToFind);

        if (filter)
        {
            targets = _.filter(targets, filter);
        }

        let closestTarget = targets[0];
        let closestDist = 9999;

        for (let i = 0; i < targets.length; i++)
        {
            let xDiff = creep.pos.x - targets[i].pos.x;
            let yDiff = creep.pos.y - targets[i].pos.y;

            let dist = Math.abs(xDiff) + Math.abs(yDiff);

            if (dist < closestDist)
            {
                closestDist = dist;
                closestTarget = targets[i];
            }
        }

        return closestTarget;
    },

    findFirst: function(creep, thingToFind)
    {
        return creep.room.find(thingToFind)[0];
    }
};

module.exports = utils;