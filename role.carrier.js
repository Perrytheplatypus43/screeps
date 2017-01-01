/**
 * Created by zmark_000 on 29/12/2016.
 */

let carrier = {

    run: function(creep) {

        if (creep.carry.energy == 0)
        {
            let target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);

            if (target)
            {
                if (creep.pickup(target) == ERR_NOT_IN_RANGE)
                {
                    if (creep.moveTo(target, {noPathFinding: true}) == ERR_NOT_FOUND)
                    {
                        creep.moveTo(target);
                    }
                }
                else
                {
                    creep.memory.carrying = true;
                }
            }
        }
        else
        {
            // Find place to drop it off. Prioritise spawner, then extension, then containers

            let target;
            let spawner = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return structure.structureType == STRUCTURE_SPAWN}})[0];

            if (spawner.energy < spawner.energyCapacity)
            {
                target = spawner;
                if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    if (creep.moveTo(target, {noPathFinding: true}) == ERR_NOT_FOUND)
                    {
                        creep.moveTo(target);
                    }
                }
                return
            }

            let extensions = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return structure.structureType == STRUCTURE_EXTENSION}});
            extensions = _.filter(extensions, (ext) => ext.energy < ext.energyCapacity);

            if (extensions.length)
            {
                target = extensions[0];
                if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    if (creep.moveTo(target, {noPathFinding: true}) == ERR_NOT_FOUND)
                    {
                        creep.moveTo(target);
                    }
                }
                return
            }

            let towers = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return structure.structureType == STRUCTURE_TOWER}});
            towers = _.filter(towers, (t) => t.energy < t.energyCapacity);

            if (towers.length)
            {
                target = towers[0];
                if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    if (creep.moveTo(target, {noPathFinding: true}) == ERR_NOT_FOUND)
                    {
                        creep.moveTo(target);
                    }
                }
                return
            }

            let containers = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return structure.structureType == STRUCTURE_CONTAINER}});
            containers = _.filter(containers, (con) => con.store.energy < con.storeCapacity);

            if (containers.length)
            {
                target = containers[0];
                if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    if (creep.moveTo(target, {noPathFinding: true}) == ERR_NOT_FOUND)
                    {
                        creep.moveTo(target);
                    }
                }
                return
            }
        }
    }
};

module.exports = carrier;