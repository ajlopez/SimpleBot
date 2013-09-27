
var simplebot = require('..');

exports['stop simple plugin'] = function (test) {
    var counter = 0;
    
    var plugin = {
        initialize: function (bot) {
            test.ok(bot);
            test.strictEqual(bot, mybot);
            counter++;
        },
        
        start: function () {
            counter++;
        },
        
        stop: function () {
            counter++;
        }
    }
    
    var mybot = simplebot.createBot();
    
    mybot.use(plugin);
    
    mybot.start();
    mybot.stop();
    
    test.equal(counter, 3);
}
