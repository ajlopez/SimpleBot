
var simplebot = require('..');

exports['process two messages'] = function (test) {
    var counter = 0;
    
    test.async();
    
    var plugin = {
        initialize: function (bot) {
            bot.subscribe(process);
        },
        
        start: function () {
        }
    }
    
    function process(msg) {
        counter += msg;
        
        if (counter == 3)
            test.done();
    }
    
    var mybot = simplebot.createBot();
    
    mybot.use(plugin);
    
    mybot.start();
    mybot.process(1);
    mybot.process(2);
}
