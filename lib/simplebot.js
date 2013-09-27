
function Bot() {
    var plugins = [];
    var listeners = [];
    
    this.use = function (plugin) {
        plugin.initialize(this);
        plugins.push(plugin);
    }
    
    this.start = function () {
        plugins.forEach(function (plugin) {
            plugin.start();
        });
    }
    
    this.stop = function () {
        plugins.forEach(function (plugin) {
            plugin.stop();
        });
    }
    
    this.subscribe = function (fn) {
        listeners.push(fn);
    }
    
    this.process = function (msg) {
        var l = listeners.length;
        var k = 0;
        
        doStep();
        
        function doStep() {
            if (k > l)
                return;
                
            var listener = listeners[k++];
            
            if (!listener)
                return;
                
            setImmediate(doStep);
            listener(msg);
        }
    }
}

function createBot() {
    return new Bot();
}

module.exports = {
    createBot: createBot
};