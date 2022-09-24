type Product = {
    title: string,
    price: number
}
const data = [
    {title: 'Produto X', price: 10},
    {title: 'Produto Y', price: 15},
    {title: 'Produto W', price: 20},
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price:number): Product[] => {
        return data.filter(item => {
            if(item.price >= price) {
                return true;
            } else {
                return false;
            }
        });
    } 
};