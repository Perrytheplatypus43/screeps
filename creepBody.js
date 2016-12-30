/**
 * Created by zmark_000 on 29/12/2016.
 */

let bodies = {

    /**
     * COSTS
     *
     * MOVE   - 50
     * WORK   - 100
     * CARRY  - 50
     * ATTACK - 80
     * HEAL   - 250
     * CLAIM  - 600
     * TOUGH  - 10
     * RANGED_ATTACK - 150
     */

    HARVESTER: [MOVE, WORK, WORK, WORK, WORK, WORK], // Cost: 550
    CARRIER: [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY], // Cost: 300
    //BUILDER: [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE],
    //UPGRADER: [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE],

    BUILDER: [WORK, CARRY, CARRY, MOVE, MOVE], // Cost: 300
    UPGRADER: [WORK, CARRY, MOVE], // Cost: 200
    REPAIRER: [WORK, CARRY, MOVE] // Cost: 200
};

module.exports = bodies;