import { Router } from 'express';
import * as HomeController from '../controller/homeController';
import * as InfoController from '../controller/infoController';
import * as UserController from '../controller/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoController.contato);

router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);

router.get('/idade', UserController.idade);

router.get('/idade-resultado', UserController.idade_post);

export default router;