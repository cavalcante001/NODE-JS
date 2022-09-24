import express, {Request, Response} from 'express';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    res.render('pages/nome', {
        nome
    });
};

export const idade = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idade_post = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;
    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};