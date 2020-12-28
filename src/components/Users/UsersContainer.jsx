import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps= (state)=>{
return{
    users: state.usersPage.users}
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userID)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userID)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users)=>{
            dispatch(setUserAC(user))
        },
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users);
