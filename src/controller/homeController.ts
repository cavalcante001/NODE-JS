import { Request, Response } from 'express';
import {Op} from 'sequelize';
import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {

    const [usuario, created] = await User.findOrCreate({
        where: {name: 'Ciclano Silva'},
        defaults: {
            age: 80
        }
    });

    console.log("USUARIO", usuario);
    console.log("CREATED", created);
    

    let users = await User.findAll();

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);
    
    res.render('pages/home',{
        nome: 'Paulo',
        idade: 22,
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [
        ],
        users
    });
};