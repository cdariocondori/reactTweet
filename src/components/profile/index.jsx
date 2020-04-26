import React , {Component} from 'react';
import styles from './profile.css';

class Profile extends Component{
render(){

        return(
            <div className='rootProfile'>
                <img className='avatarProfile' src={this.props.picture} />
                <span className='nameProfile'> {this.props.displayName} </span>
                <ul className='dataProfile'>
                    <li>
                    <span className='fa fa-user'> </span> {this.props.username} 
                    </li>

                    <li>
                    <span className='fa fa-envelope'> </span> {this.props.emailAddress} 
                    </li>
                    <li>
                    <span className='fa fa-map-marker'> </span> {this.props.location} 
                    </li>

                </ul>
                </div>
        )
    
}

}

export default Profile