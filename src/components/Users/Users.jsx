import React from 'react';
import s from './Users.module.css'
import  userPhoto from '../../assets/images/pngtree-vector-block-user-icon-png-image_780605.jpg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

function Users (props) {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);

   let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

      return (
        <div>  {pages.map( p => {
               return <span className={ props.currentPage === p && s.selectedPage} 
               onClick={(e) => { props.onPageChanged(p);}}> {p} </span>
                     })}
        {props.users.map((u) => <div key={u.id }>
            <span>
                <div>
            <NavLink to={'/profile/'+ u.id}>
                <img src={u.photos.small != null ?u.photos.small : userPhoto} 
                className={s.userPhoto} alt="User ava"/>
            </NavLink>
             </div>
                <div>
                    { u.followed
                 ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                    props.toggleIsFollowingProgress(true, u.id)
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                         'API-KEY': '9073f02f-aa4c-41e2-917d-7f343fdfaf42'
                            }
                            }).then(response => {
                                if(response.data.resultCode === 0)
                                 props.unfollow(u.id)
                                 props.toggleIsFollowingProgress(false, u.id);
                                                    })
                                     } }> Unfollow </button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                        props.toggleIsFollowingProgress(true, u.id)
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '9073f02f-aa4c-41e2-917d-7f343fdfaf42'
                            }
                        }).then(response => {
                           if (response.data.resultCode === 0 ){
                            props.follow(u.id)
                           }
                           props.toggleIsFollowingProgress(false, u.id)
                                });
                        } }>Follow</button> 

                        }
                </div>
            </span>

            <span>
               <span>
                   <div>{u.id} </div>
                   <div> {u.name}</div>
                   <hr/>
               </span>
               {/* <span>
                   <div>{u.location.country}</div>
                   <div>{u.location.city}</div> 
               </span> */}
            </span>
        </div>)}
    </div>
     )
}

export default Users;