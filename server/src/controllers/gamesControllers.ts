import { Request, Response } from 'express';

import pool from '../database'
import gamesRoutes from '../routes/gamesRoutes';

class gamesControllers {
    // public async list(req: Request, res: Response) {
    //     res.json({ text: `los instructores son:` })
    //     const facilitadores = await pool.query('SELECT * FROM instructores');
    //     res.json(facilitadores);
    // }

    public async create(req: Request, res: Response) {
        // console.log(req.body);
        await pool.query('INSERT INTO facilitador ?', [req.body]);
        res.json({ text: `hola ${req.params}` })
    }

    public async listcourses(req: Request, res: Response) {
        await pool.query('SELECT * FROM cursos', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM instructores', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        // res.json({ text: `el instructor es: ${req.params.id}` })
        const { id } = req.params;
        const facilitador = await pool.query(`SELECT * FROM facilitador WHERE id = ${id}`);

        // if (facilitador.length > 0) {
        //     return res.json(facilitador[0])
        // }
        res.status(404).json({ text: `el instructor no esta` })

        console.log(facilitador);
        res.json({ text: `instructor encontrado` })
    }

    public delete(req: Request, res: Response) {
        res.json({ text: `'eliminando un instructor' ${req.params.id}` })
        const { id } = req.params
        pool.query(`DELETE FROM instructores WHERE id = ? ${[id]}`)
        res.json({ message: `el instructor fue eliminado` })
    }

    public update(req: Request, res: Response) {
        // res.json({ text: `'añadiendo un instructor' ${req.params.id}` });
        const { id } = req.params;
        pool.query(`UPDATE instructores set ? ${req.body, id}`)
        res.json({ message: `el instructor fue actualizado` })
    }

}

const GamesControllers = new gamesControllers();

export default GamesControllers;