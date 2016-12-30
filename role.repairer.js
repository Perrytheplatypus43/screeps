let task = {
    repair: require('task.repair').repair,
    resupply: require('task.resupply').resupply
};

let roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.carry.energy == 0)
        {
            task.resupply(creep);
        }
        else
        {
            task.repair(creep);
        }
    }
};

module.exports = roleRepairer;