import React from "react";
import {auth} from "../../firebase";


function UserInfo() {
    
    return(
        <div>
            <img src={auth.currentUser.photoURL} alt={auth.currentUser.displayName} />
            <p>{auth.currentUser.displayName}</p>
            <p>{auth.currentUser.email}</p>
            <div>
                 <p>ログアウトする</p>
            </div>
            
        </div>
        
    )
}

export default UserInfo