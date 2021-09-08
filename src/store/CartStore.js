import { Store } from "pullstate";

const CartStore = new Store({
    
    cart: []
});

export default CartStore;

export const addToCart = (passedProduct) => {

    const currentCart = CartStore.getRawState().cart;
    const added = !currentCart.includes(passedProduct);

    CartStore.update(s => {

        if (currentCart.includes(passedProduct)) {
            
            s.cart = currentCart.filter(product => product !== passedProduct);
        } else {
            
            s.cart = [ ...s.cart, passedProduct ];
        }
    });

    return added;
}