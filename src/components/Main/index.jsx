import React , { Component} from 'react';

//import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';

import MessageList from '../MessageList';

import InputText from '../InputText';

import ProfileBar from '../ProfileBar';


class Main extends Component{

constructor(props){
    super(props)
    this.state = {
        user : Object.assign({}, this.props.user, {retweets: []}, {favorites: []}),
        openText: false,
        userNameToReply :'',
        messages: [{
            id: uuidv4(),
            text: 'Mensaje del tweet',
            picture: 'https://as2.ftcdn.net/jpg/01/19/32/93/500_F_119329387_sUTbUdeyhk0nuhNw5WaFvOyQFmxeppjX.jpg',
            displayName: 'Dario Humerez',
            username: 'dcondori',
            date: Date.now(),
            retweets: 0,
            favorites: 0
         },
         {
            id: uuidv4(),
            text: 'Mensaje del tweet',
            picture: 'https://as2.ftcdn.net/jpg/01/19/32/93/500_F_119329387_sUTbUdeyhk0nuhNw5WaFvOyQFmxeppjX.jpg',
            displayName: 'Dario Humerez',
            username: 'dcondori',
            date: Date.now(),
            retweets: 0,
            favorites: 0
         }
        ]
    }   
    this.handleSendText = this.handleSendText.bind(this);
    this.handleCloseText = this.handleCloseText.bind(this);
    this.handleOpenText = this.handleOpenText.bind(this);
    this.handleRetweet = this.handleRetweet.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleReplyTweet = this.handleReplyTweet.bind(this);
}

handleReplyTweet(msgId, userNameToReply){
    this.setState({
        openText:true,
        userNameToReply
    })

}
handleRetweet(msgId){
    
let alreadyRetweeted=this.state.user.retweets.filter(rt=> rt ===msgId)
if(alreadyRetweeted.length ===0 ){
    let messages = this.state.messages.map(msg =>{
        if(msg.id === msgId){
            msg.retweets++;
        }
        return msg;
    })
    let user = Object.assign({}, this.state.user);
    user.retweets.push(msgId);
    this.setState({
       messages,
       user 
    })
}

}
handleFavorite(msgId){
    let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId);
     if(alreadyFavorited.length  ==0){
         let messages = this.state.messages.map(msg => {
            if(msg.id === msgId){
                msg.favorites++;
            }      
            return msg
         })
         let user  = Object.assign({}, this.state.user);
         user.favorites.push(msgId);
         this.setState({
             messages : messages,
             user: user
         })
     }
}

handleSendText(event){
   // alert("send");
    event.preventDefault();
    let newMessage={
        username: this.props.user.email.split('@')[0],
        displayName: this.props.user.displayName,
        picture : this.props.user.photoURL,
        date: Date.now(),
        text: event.target.textarea.value

    }
    console.log(newMessage);
    this.setState({
        messages : this.state.messages.concat([newMessage]),
        openText :  false
    });
}

handleCloseText(event){
     //alert("close");
    event.preventDefault();
    this.setState({ openText: false});
}

handleOpenText(event){
    event.preventDefault()
    this.setState({ openText: true})
}
 
renderOpenText(){
    if(this.state.openText){
        return (
        <InputText
        onSendText={this.handleSendText}
        onCloseText={this.handleCloseText}
        userNameToReply={this.state.userNameToReply}
        />
        )
    }
}

    render(){
        return(
            <div>
            <ProfileBar
                picture={this.props.user.photoURL}
                username={this.props.user.email.split('@')[0]}
                onOpenText={this.handleOpenText}
            />
            {this.renderOpenText()}
            <MessageList 
            messages={this.state.messages} 
            onRetweet={this.handleRetweet}
            onFavorite={this.handleFavorite}
            onReplyTweet={this.handleReplyTweet}
            />
            </div>
        )
    }
}
export default Main