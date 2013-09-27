# Primes samples

In this sample, a bot run with three plugins:

- A number generator, that generates messages to be processed by the bot
- A prime number detector, that emit an outcome message if the number is prime
- A logger, that shows in console each message emitted by the bot

To run the sample

```
node app
```

Bot creation, configuration and launch:

```js
var bot = simplebot.createBot();

bot.use(generator);
bot.use(primes);
bot.use(logger);

bot.start();
```

The generator produces the numbers, with a kick off call to `.start()` method:

```js
var n = 3;

function doGeneratorStep(bot) {
    if (n > 100)
        return;
        
    setImmediate(function () { doGeneratorStep(bot); });
    console.log(n);
    bot.process(n);
    n += 2;
}

// ...

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
```

The prime detector subscribes and processes all incoming messages:

```js
function processNumber(number, bot) {
    if (number % 2 == 0)
        return;
        
    for (var k = 3; k * k <= number; k += 2)
        if (number % k == 0)
            return;
            
    bot.emit('Prime ' + number);
}

// ...

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
```

The logger registers itself as an emitter of message:

```js
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
```
