import { Router } from 'express';
import coursesControllers from '../controllers/coursesControllers'


class CoursesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        /**Ruta de aplicacion cuando visiten la ruta
         * inicial se va a devolver eso
         */

        this.router.get("/", coursesControllers.listcourses);

    }
}

const coursesRoutes = new CoursesRoutes();
export default coursesRoutes.router;