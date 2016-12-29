let task = {
    build: require('task.build').build,
    resupply: require('task.resupply').resupply
};

let roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep)
    {

        if (creep.carry.energy == 0)
        {
            task.resupply(creep);
        }
        else
        {
            task.build(creep);
        }
    }
};

module.exports = roleBuilder;