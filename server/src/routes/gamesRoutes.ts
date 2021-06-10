import { Router } from 'express';
import GamesControllers from '../controllers/gamesControllers'


class GamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        /**Ruta de aplicacion cuando visiten la ruta
         * inicial se va a devolver eso
         */
        this.router.get("/", GamesControllers.list);
        this.router.get("/", GamesControllers.listcourses);
        this.router.get("/:id", GamesControllers.getOne);
        this.router.post("/", GamesControllers.create);
        this.router.put("/:id", GamesControllers.update);
        this.router.delete('/:id', GamesControllers.delete)
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;