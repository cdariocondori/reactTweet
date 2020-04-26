import React , { Component} from 'react';
//import render from 'React-dom';
import 'normalize-css';
//import {HashRouter, Match } from 'react-router';
import styles from './app.css';
import Header from '../Header';
import Main from '../Main';
import Login from '../login';

import {
    Route,
    NavLink,
    Match,
    Redirect,
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import Profile from '../Profile';
import Users from '../users';
import firebase from 'firebase';

class App extends Component {
    constructor(){
        super()
        this.state = {
           user: null
            
           /* user: {
                photoURL: 'https://as2.ftcdn.net/jpg/01/19/32/93/500_F_119329387_sUTbUdeyhk0nuhNw5WaFvOyQFmxeppjX.jpg',
                email: 'dxrkio@gmail.com',
                displayName: 'Dario Condori',
                location: 'direccion'
            }
            */
            
        }
        this.handleOnAuth= this.handleOnAuth.bind(this);

        this.handleLogout= this.handleOnLogout.bind(this);
    }


    // component de ciclo de vida willMount (apps render server)
    //willDid apps render client
    componentWillMount(){
        console.log("componentWillMount run " );

       firebase.auth().onAuthStateChanged(user => {
           console.log("componentWillMount return " + user );
           if(user){
                this.setState({user})

          }else{
              this.setState({ user: null})
          }
       }) 
    }

    handleOnAuth(){

       console.log("on click");
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(result.user.email+ ' ha iniciado sesión') )
        .catch(error => console.error('Error: '+ error.code + ' : ' + error.message))

    }

    handleOnLogout(){
        firebase.auth().signOut()
        .then(() => console.log('te has desconectado correctamente'))
        .catch(() => console.log('error al cerrar sesión'))
    }

    render(){
       // alert(this.state.user);
       let islogin;
        if (this.state.user) //check condition
        { 
            islogin= <Redirect to='/'/>;
         
        }else{
            islogin= <Redirect to='/login'/>;
        }
        return(
            // <Main  user={this.state.user} />
            <div>
                <Header />
                <Switch>
               
                  
                            <Route exact  path="/"
                                render={(props) => (this.state.user) ? <Main  user={this.state.user} onLogout={this.handleLogout} /> : <Login  onAuth={this.handleOnAuth} />
                            }
                            />     
            
       
     
                      <Route  path="/login"
                            render={() => <Login  onAuth={this.handleOnAuth} />
                        }
                        />   

                
                         <Route path="/users" component={Users} />
                         <Route path="/profile" 
                         render={() => <Profile  
                                                picture={this.state.user.photoURL}
                                                username={this.state.user.email.split('@')[0]}
                                                displayName={this.state.user.displayName}
                                                location={this.state.user.location}
                                                emailAddress={this.state.user.email}
                         
                         />
                        }
                        />     
                         <Route path="/user/:username" 
                          render={({match}) => <Profile  
                                   
                                                username={match.params.username}
                                                displayName={match.params.username}
                                     
                         
                         />
                        }
                        />   
                    </Switch>
            </div>
         
        )
    }
}

export default App