import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {
    componentDidMount () {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers (data.items);
            this.props.setTotalUsersCount (data.totalCount);
            
                });
            }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers (data.items)
                });
            }
    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                    totalUsersCount={this.props.totalUsersCount} 
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow} 
                    isFetching={this.props.isFetching}
                    followingInProgress={this.props.followingInProgress}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    />
                    
                    
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        toggleIsFollowingProgress: state.usersPage.toggleIsFollowingProgress
       
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress } )
    (UsersContainer);