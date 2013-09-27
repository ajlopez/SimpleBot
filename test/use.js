
var simplebot = require('..');

exports['use simple plugin'] = function (test) {
    var counter = 0;
    
    var plugin = {
        initialize: function (bot) {
            test.ok(bot);
            test.strictEqual(bot, mybot);
            counter++;
        }
    }
    
    var mybot = simplebot.createBot();
    mybot.use(plugin);
    
    test.equal(counter, 1);
}