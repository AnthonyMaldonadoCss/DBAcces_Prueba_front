"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        /**Ruta de aplicacion cuando visiten la ruta
         * inicial se va a devolver eso
         */
        this.router.get("/", (req, res) => res.send('Hello'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
