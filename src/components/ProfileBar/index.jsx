import React, {Component} from 'react';
import styles from './profile-bar.css';
import {  Link} from "react-router-dom";
//import Link from  'react-router';
 class ProfileBar extends Component{
     constructor(){
         super()
     }
     render (){
         return(
            <div className="root4">
              <Link  to='/profile'>
                <figure>
                   <img className="avatar2" src={this.props.picture} /> 
                </figure>
          </Link>
                    <span className="username2">Hola @{this.props.username}! 
                    </span>

                    <button onClick={this.props.onOpenText} className="button2">
                         <span className="fa fa-lg fa-edit"> </span> Tweet!
                    </button>  

                    <button onClick={this.props.onLogout} className="button2">
                         <span className="fa fa-sign-out"> </span> Salir
                    </button>  

            
            </div>

         )
     }
 }
 export default ProfileBar