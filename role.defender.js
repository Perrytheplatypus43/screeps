/**
 * Created by zmark_000 on 29/12/2016.
 */
let task = require('task.defend');

let roleDefender = {

    /** @param {Creep} creep **/
    run: function(creep) {

        task.defend(creep);

    }
};

module.exports = roleDefender;