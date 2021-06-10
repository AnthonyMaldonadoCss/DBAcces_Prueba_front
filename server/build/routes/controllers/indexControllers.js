"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexControllers = void 0;
class indexControllers {
    index(req, res) {
        res.send('hello');
    }
}
exports.IndexControllers = new indexControllers();
