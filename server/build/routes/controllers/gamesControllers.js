"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class gamesControllers {
    index(req, res) {
        res.send('games');
    }
}
const GamesControllers = new gamesControllers();
exports.default = GamesControllers;
