import React from 'react';
import s from './Post.module.css'

function Post (props) {
    return (
          <div className={s.item}>
              <img src ='https://i.pinimg.com/originals/37/2b/e1/372be10e3742c7972d61bd6c0baaa5ab.jpg ' alt='1' ></img>
            {props.massage} {props.addPost} 
            <div>
            <span>like {props.like}</span>
            </div>
            </div>
          
        
    
    )
  }
  export default Post