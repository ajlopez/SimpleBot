
function Bot() {
    this.use = function (plugin) {
        plugin.initialize(this);
    }
}

function createBot() {
    return new Bot();
}

module.exports = {
    createBot: createBot
};