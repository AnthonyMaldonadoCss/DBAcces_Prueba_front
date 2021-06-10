"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexControllers = void 0;
class indexControllers {
    index(req, res) {
        res.json({ text: 'API is /api/' });
    }
}
exports.IndexControllers = new indexControllers();
