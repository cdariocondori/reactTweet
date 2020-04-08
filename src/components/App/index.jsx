import React , { Component} from 'react';
//import render from 'React-dom';
import 'normalize-css';
//import {HashRouter, Match } from 'react-router';
import styles from './app.css';



class App extends Component {
    constructor(){
        super()
        this.state = {
            user: {
                photoURL: 'https://as2.ftcdn.net/jpg/01/19/32/93/500_F_119329387_sUTbUdeyhk0nuhNw5WaFvOyQFmxeppjX.jpg',
                email: 'dxrkio@gmail.com',
                displayName: 'Dario Condori'
            }
        }
    }
    render(){
        return(
            <div>
            hola react
         
            </div>
 
        )
    }
}

export default App