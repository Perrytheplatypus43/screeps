/**
 * Created by zmark_000 on 29/12/2016.
 */

let bodies = {

    // HARVESTER: [MOVE, WORK, WORK, WORK, WORK, WORK],
    // CARRIER: [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY],
    // BUILDER: [WORK, CARRY, CARRY, CARRY, MOVE, MOVE]

    HARVESTER: [MOVE, WORK, WORK],
    CARRIER: [MOVE, CARRY],
    BUILDER: [WORK, CARRY, MOVE],
    UPGRADER: [WORK, CARRY, MOVE],
    REPAIRER: [WORK, CARRY, MOVE]
};

module.exports = bodies;