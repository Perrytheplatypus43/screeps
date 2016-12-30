let task = {
    upgrade: require('task.upgrade').upgrade,
    resupply: require('task.resupply').resupply
};

let roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep)
    {
        if (creep.carry.energy == 0)
        {
            task.resupply(creep);
        }
        else
        {
            task.upgrade(creep);
        }
    }
};

module.exports = roleUpgrader;