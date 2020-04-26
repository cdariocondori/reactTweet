import React, {Component} from 'react';
import styles from './login.css';

class Login extends Component {
    render(){
        return (
            <div className='loginRoot'>
                <p className='loginText'>
                   iniciar con github
                </p>
               <button onClick={this.props.onAuth} className='loginButton'>  
                    <span className='fa fa-user'> </span> login con GitHub
                </button> 
           </div>
        )
    }
}

export default Login