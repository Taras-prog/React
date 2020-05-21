import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followtAC, unfoolowAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followtAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfoolowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Users);