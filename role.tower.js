/**
 * Created by zmark_000 on 31/12/2016.
 */

let task = {
    repair: require('task.repair').repair
};

let roleTower = {

    /** @param {Tower} tower **/
    run: function(tower) {

        task.repair(tower);
    }
};

module.exports = roleTower;