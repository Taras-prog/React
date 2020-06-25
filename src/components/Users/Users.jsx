import React from 'react';
import s from './Users.module.css'
import  userPhoto from '../../assets/images/pngtree-vector-block-user-icon-png-image_780605.jpg'

function Users (props) {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);

   let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

      return (
        <div>
         <div>
            {pages.map( p => {
               
               return <span className={ props.currentPage === p && s.selectedPage} 
               onClick={(e) => { props.onPageChanged(p);}}> {p} </span>
            })}

        </div>
        {props.users.map((u) => <div key={u.id }>
            <span>
                <div>
                <img src={u.photos.small != null ?u.photos.small : userPhoto } className={s.userPhoto} />
                </div>
                <div>
                    { u.followed
                    ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button> 
                    : <button onClick={ () => {props.follow(u.id)} }> Follow </button> }
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