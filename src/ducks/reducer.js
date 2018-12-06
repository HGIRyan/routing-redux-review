const initialState = {
    name: '',
    age: '',
    fav1: '',
    fav2: '',
    fav3: '',
}

// DEFINE
const UPDATENAME = 'UPDATENAME'
const UPDATEAGE = 'UPDATEAGE'
const UPDATEFOOD = 'UPDATEFOOD'
const UPDATEBAND = 'UPDATEBAND'
const UPDATEBOOK = 'UPDATEBOOK'
const RESEST_STATE = "RESET_STATE"


// FUNCTION
export function updateBook(book) {
    return {
        type: UPDATEBOOK,
        payload: book
    }
}
export function updateBand(band) {
    return {
        type: UPDATEBAND,
        payload: band
    }
}
export function updateFood(food) {
    return {
        type: UPDATEFOOD,
        payload: food
    }
}
export function updateName(name) {
    return {
        type: UPDATENAME,
        payload: name
    }
}
export function updateAge(age) {
    return {
        type: UPDATEAGE,
        payload: age
    }
}
export function resetState() {
    return {
        type: RESEST_STATE
    }
}

// EXPORT
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATENAME:
            return { ...state, name: action.payload }
        case UPDATEAGE:
            return { ...state, age: action.payload }
        case UPDATEFOOD:
            return { ...state, food: action.payload }
        case UPDATEBAND:
            return { ...state, band: action.payload }
        case UPDATEBOOK:
            return { ...state, book: action.payload }
        case RESEST_STATE:
            return { ...state, name: '', age: '', fav1: '', fav2: '', fav3: '' }
        default:
            return state;
    }
}