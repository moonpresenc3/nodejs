const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id: 1, followed: false, fullName: "Ivan", status: 'I am a boss', location:{city:'Moskow', country:'Russia'}},
        {id: 2, followed: true, fullName: "Stas", status: 'I am a boss too', location:{city:'Kiev', country:'Ukrain'}},
        {id: 3, followed: false, fullName: "Dmitry", status: 'I am a boss too too', location:{city:'Minsk', country:'Belarus'}},
    ],
    newPostText: "demo",
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
        return{
        ...state,
        users: state.users.map( u => {
        if(u.id === action.userId){
        return{...u, followed:true}
        return u;
        } )
        }
case UNFOLLOW:
        return{
                ...state,
                users: state.users.map( u => {
                if(u.id === action.userId){
                return{...u, followed:false}
                return u;
                } )
                }
case SET_USERS:{
                return{...state, users: [...state.users, ...action.users]}
                }

        default:
            return state;
    }

};

export const followAC = () => ({ type: FOLLOW, userId });
export const unfollowAC = () => ({type: UNFOLLOW, newText: text, userId})
export const setUsersAC = () => ({type: SET_USERS, users})

export default usersReducer;
