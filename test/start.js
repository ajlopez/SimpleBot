
var simplebot = require('..');

exports['start simple plugin'] = function (test) {
    var counter = 0;
    
    var plugin = {
        initialize: function (bot) {
            test.ok(bot);
            test.strictEqual(bot, mybot);
            counter++;
        },
        
        start: function () {
            counter++;
        }
    }
    
    var mybot = simplebot.createBot();
    
    mybot.use(plugin);
    
    mybot.start();
    
    test.equal(counter, 2);
}

exports['start two plugins'] = function (test) {
    var counter1 = 0;
    var counter2 = 0;
    
    var plugin1 = {
        initialize: function (bot) {
            test.ok(bot);
            test.strictEqual(bot, mybot);
            counter1++;
        },
        
        start: function () {
            counter1++;
        }
    }
    
    var plugin2 = {
        initialize: function (bot) {
            test.ok(bot);
            test.strictEqual(bot, mybot);
            counter2++;
        },
        
        start: function () {
            counter2++;
        }
    }
    
    var mybot = simplebot.createBot();
    
    mybot.use(plugin1);
    mybot.use(plugin2);
    
    mybot.start();
    
    test.equal(counter1, 2);
    test.equal(counter2, 2);
}