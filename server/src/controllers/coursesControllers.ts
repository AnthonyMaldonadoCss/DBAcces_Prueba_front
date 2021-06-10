import { Request, Response } from 'express';

import pool from '../database'
import coursesRoutes from '../routes/coursesRoutes';

class coursesControllers {


    public async listcourses(req: Request, res: Response) {
        await pool.query('SELECT * FROM cursos', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }



}

const CoursesControllers = new coursesControllers();

export default CoursesControllers;