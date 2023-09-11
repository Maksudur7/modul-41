const getStorCard = () =>{
    const storcardstring = localStorage.getItem('cart');
    if(storcardstring){
        return JSON.parse(storcardstring);
    }
    return [];
}

const addTols = id =>{
    const cart = getStorCard();
    cart.push(id);
    // console.log(cart)
    saveCartTols(cart)
}
const saveCartTols = cart =>{
    const cardStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cardStringify);
}
export {addTols, getStorCard}