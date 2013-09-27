
var simplebot = require('..');

exports['emit two messages'] = function (test) {
    var counter = 0;
    
    test.async();
    
    var plugin = {
        initialize: function (bot) {
            bot.emitter(emit);
        },
        
        start: function () {
        }
    }
    
    function emit(msg) {
        counter += msg;
        
        if (counter == 3)
            test.done();
    }
    
    var mybot = simplebot.createBot();
    
    mybot.use(plugin);
    
    mybot.start();
    mybot.emit(1);
    mybot.emit(2);
}
