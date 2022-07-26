import {Router} from 'express'
import * as userController from './app.routes.controller'

const router = Router();

router.get('/login', userController.getUsers);
router.post('/login/', userController.createUser);
router.post('/login/compare', userController.getUser);
router.delete('/login/:id', userController.createUser);


router.get('/episodes', userController.getListEpisode);
router.post('/episodes/createpisodes', userController.createListEpisode);
router.post('/episodes/insertepisodes', userController.insertListEpisode);
router.post('/episodes/deletepisodes', userController.deleteListEpisode);



export default router;