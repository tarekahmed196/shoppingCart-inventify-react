import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async()=>{
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];

    for(const id in storedCart){
        const addedProduct = products.find(pd =>pd.id ===id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    
    return savedCart;
}

export default cartProductsLoader;