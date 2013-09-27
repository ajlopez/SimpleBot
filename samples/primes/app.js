
var simplebot = require('../..');

var n = 3;

function doGeneratorStep(bot) {
    if (n > 100)
        return;
        
    setImmediate(function () { doGeneratorStep(bot); });
    console.log(n);
    bot.process(n);
    n += 2;
}

function processNumber(number, bot) {
    if (number % 2 == 0)
        return;
        
    for (var k = 3; k * k <= number; k += 2)
        if (number % k == 0)
            return;
            
    bot.emit('Prime ' + number);
}

var generator = {
    initialize: function (bot) { 
        console.log("Initializing number generator"); 
        this.bot = bot; 
    },
    start: function () { 
        console.log("Starting number generator"); 
        setImmediate(doGeneratorStep(bot));
    }
};

var primes = {
    initialize: function (bot) { 
        console.log("Initializing prime detector"); 
        bot.subscribe(function (number) { 
            processNumber(number, bot); 
        }); 
        this.bot = bot; 
    },
    start: function () { 
        console.log("Starting prime detector"); 
    }
};

var logger = {
    initialize: function (bot) { 
        console.log("Initializing output log"); 
        bot.emitter(function (msg) { 
            console.log(msg); 
        }); 
    },
    start: function () { 
        console.log("Starting output log");
    }
};

var bot = simplebot.createBot();

bot.use(generator);
bot.use(primes);
bot.use(logger);

bot.start();

