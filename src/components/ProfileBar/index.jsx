import React, {Component} from 'react';
import styles from './profile-bar.css';

 class Profile extends Component{
     constructor(){
         super()
     }
     render (){
         return(
            <div className="root4">
            
                <figure>
                   <img className="avatar2" src={this.props.picture} /> 
                </figure>
                    <span className="username2">Hola @{this.props.username}! 
                    </span>
                    <button onClick={this.props.onOpenText} className="button2">
                         <span className="fa fa-lg fa-edit"> </span> Tweet!
                    </button>     
            
            </div>

         )
     }
 }
 export default Profile