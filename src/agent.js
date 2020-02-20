const Http = require('http');

function start() {
    const emit = Http.Server.prototype.emit;
    Http.Server.prototype.emit = function (type) {
        if (type === 'request') {
            const [req, res] = [arguments[1], arguments[2]];
            res.setHeader('X-Instrumented-By', 'Sqreen')
        }

        return emit.apply(this, arguments);
    };

}
module.exports = { start }
