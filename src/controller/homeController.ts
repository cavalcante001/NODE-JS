import { Request, Response } from 'express';
import {Op} from 'sequelize';
import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {

    // const user = User.build({
    //     name: 'Fulano',
    //     age: 25
    // });

    // await user.save();

    // const user = await User.create({
    //     name: 'Ciclano',
    //     age: 39
    // });

    //build + save
    //create
    let searchName: string = 'pa';

    let users = await User.findAll();







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