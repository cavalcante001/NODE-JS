import { Request, Response } from 'express';
import {Op} from 'sequelize';
import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {
    let searchName: string = 'pa';

    let users = await User.findAll({
        where: {
            age: {
                [Op.gte]: 18
            }
        },
        offset: 2,
        limit: 1
    });







    // try {
    //     await sequelize.authenticate();
    //     console.log("Conexão estabelecida com sucesso");
    // } catch(error) {
    //     console.log("Deu problema: ", error);
    // }
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