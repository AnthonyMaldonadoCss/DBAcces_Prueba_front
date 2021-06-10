import { Router } from 'express';

import { IndexControllers } from './../controllers/indexControllers';

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        /**Ruta de aplicacion cuando visiten la ruta
         * inicial se va a devolver eso
         */
        this.router.get("/", IndexControllers.index)
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;