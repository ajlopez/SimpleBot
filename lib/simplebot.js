
function Bot() {
    var plugins = [];
    
    this.use = function (plugin) {
        plugin.initialize(this);
        plugins.push(plugin);
    }
    
    this.start = function () {
        plugins.forEach(function (plugin) {
            plugin.start();
        });
    }
}

function createBot() {
    return new Bot();
}

module.exports = {
    createBot: createBot
};