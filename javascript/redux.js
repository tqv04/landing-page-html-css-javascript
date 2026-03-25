const store = createStore(reducer);
function createStore(){
    let savedState = JSON.parse(localStorage.getItem("state"));
    let state = savedState || reducer(undefined, {});
    const subscribers = [];
    return{
        getState(){
            return state;
        },
        dispatch(action){
            state = reducer(state,action);
            localStorage.setItem("state", JSON.stringify(state));
            subscribers.forEach(subscriber => subscriber())
        },
        subscribe(subscriber){
            subscribers.push(subscriber)
        }
    }
}

function addToCart(product){
    console.log("PRODUCT:", product);
    store.dispatch({
        type: "ADD_TO_CART",
        payload:{
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1
        }
    });
}

function addToWishlist(product){
    store.dispatch({
        type: "ADD_TO_WISHLIST",
        payload:{
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1
        }
    });
}

function reducer(state = { cart: [], wishlist: [] }, action){
    switch(action.type){
        case "ADD_TO_CART":
            console.log("Before:", state.cart);
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };

        case "ADD_TO_WISHLIST":
            console.log("Before:", state.wishlist);
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item, i) => i !== action.payload)
            };
            case "REMOVE_FROM_WISHLIST":
        return {
            ...state,
            wishlist: state.wishlist.filter((item, i) => i !== action.payload)
        };
        default:
            return state;
    }
}

function renderUI(){
    const state = store.getState();
    document.querySelector(".fa-bag-shopping + span").innerText = state.cart.length;
    document.querySelector(".fa-heart + span").innerText = state.wishlist.length;
    console.log(state.cart.length)
}

document.addEventListener("DOMContentLoaded", () => {
    console.log(store.getState().cart);
    renderUI();
    store.subscribe(renderUI);
});

