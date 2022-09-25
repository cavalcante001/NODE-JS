import { Request, Response } from 'express';
import {Op} from 'sequelize';
import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {

    let results = await User.findAll({
        where: { id: 4 }
    });

    if(results.length > 0) {
        let usuario = results[0];
        usuario.age = 70;

        await usuario.save();
    }

    console.log(results)
    

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