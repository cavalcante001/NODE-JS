import { Request, Response } from 'express';
import {Op} from 'sequelize';
import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {
    let searchName: string = 'pa';

    let users = await User.findAll({
        where: {
            name: {
                [Op.like]: `%${searchName}%`
                // [Op.notIn]: [30,55]
                // [Op.in]: [30,55]
                // [Op.notBetween]: [40, 100]
                // [Op.gt]: 40, // >40 
                // [Op.gte]: 40, // >= 40 
                // [Op.lt]: 40, // < 40] 
                // [Op.lte]: 40, // <= 40]

                // GT = Greather Than
                // E = Equal
                // LT = Lower Than
            }
        }        
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