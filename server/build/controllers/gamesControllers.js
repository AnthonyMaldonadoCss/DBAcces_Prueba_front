"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class gamesControllers {
    // public async list(req: Request, res: Response) {
    //     // res.json({ text: `los instructores son:` })
    //     const facilitadores = await pool.query('SELECT * FROM instructores');
    //     res.json(facilitadores);
    // }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            yield database_1.default.query('INSERT INTO facilitador ?', [req.body]);
            res.json({ text: `hola ${req.params}` });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM instructores', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({ text: `el instructor es: ${req.params.id}` })
            const { id } = req.params;
            const facilitador = yield database_1.default.query(`SELECT * FROM facilitador WHERE id = ${id}`);
            // if (facilitador.length > 0) {
            //     return res.json(facilitador[0])
            // }
            res.status(404).json({ text: `el instructor no esta` });
            console.log(facilitador);
            res.json({ text: `instructor encontrado` });
        });
    }
    delete(req, res) {
        res.json({ text: `'eliminando un instructor' ${req.params.id}` });
        const { id } = req.params;
        database_1.default.query(`DELETE FROM instructores WHERE id = ? ${[id]}`);
        res.json({ message: `el instructor fue eliminado` });
    }
    update(req, res) {
        // res.json({ text: `'añadiendo un instructor' ${req.params.id}` });
        const { id } = req.params;
        database_1.default.query(`UPDATE instructores set ? ${req.body, id}`);
        res.json({ message: `el instructor fue actualizado` });
    }
}
const GamesControllers = new gamesControllers();
exports.default = GamesControllers;
