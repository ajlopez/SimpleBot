# SimpleBot

A simple bot for Node.js, with plugins support.

## Installation

Via npm on Node:

```
npm install simplebot
```


## Usage

Reference in your program:

```js
var simpletbot = require('simplebot');
```

Create, configure and launch a bot:
```js
var bot = simplebot.createBot();

bot.use(plugin1);
bot.use(plugin2);
bot.use(plugin3);

bot.start();
```

A plugin can:

- Produce message to be processed by the bot and its plugins
- Emit outcoming message using the bot
- Subscribe to incoming message to the bot

## Writing a plugin

A plugin is an object with methods:

- `.initialize(bot)` called when the plugin is added to the bot
- `.start()` called when `bot.start()` is called
- `.stop()` called when `bot.stop()` is called

Your plugin code can access and use all the Node.js ecosystem. It can call these bot methods:

- `bot.process(msg)` sending a message (simple number, string, object) to be processed by bot and its plugins, in asynchronous way
- `bot.emit(msg)` emitting an outcoming message using the bot

Some plugins can subscribe to incoming message, or can be interested in process the outcoming messages:

- `bot.emitter(fn)` registering a function that receives a `msg` parameter for each message emitted by the bot and its plugins
- `bot.subscribe(fn)` registering a function that receives and process a `msg` parameter for each message received by the bot

See the test and samples folders for more detailed use cases.

## Development

```
git clone git://github.com/ajlopez/SimpleBot.git
cd SimpleBot
npm install
npm test
```

## Samples

- [Primes](https://github.com/ajlopez/SimpleBot/tree/master/samples/primes) a prime number detector

## License

MIT

## Versions

- 0.0.1: Published

## References

- [Build IRC Bots with Node.js](http://davidwalsh.name/nodejs-irc)
- [How to make a Twitter bot](http://tinysubversions.com/2013/09/how-to-make-a-twitter-bot/)
- [A simple example Twitter bot using NodeJS](https://github.com/dariusk/examplebot)

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleBot) and submit
[pull requests](https://github.com/ajlopez/SimpleBot/pulls) — contributions are
welcome<

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

