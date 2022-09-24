import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let user = {
        nome: 'Paulo',
        idade: 22,
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20},
        ],
        frasesDoDia: [
        ]
    }
    res.render('pages/home', {
        user,
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.render('pages/contato');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/sobre');
});

router.get('/nome', (req: Request, res: Response) => {
    res.render('pages/nome');
});

export default router;