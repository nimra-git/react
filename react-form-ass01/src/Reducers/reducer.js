import Users from '../UserDB.json'

const initialState = {
    data: Users,
}

const userReducer = (state = initialState, action) => {
    console.log("reducer", action.type)
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                data: [...state.data, action.payload],
            };

        default:
            return state;
    }
}

export default userReducer;