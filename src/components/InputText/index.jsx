import React, {Component} from 'react';
import styles from './input-text.css';

class InputText extends Component{
    render (){
        return(
        <form className="formInput"  onSubmit={this.props.onSendText} >
                <textarea className="textInput" name="textarea" > 
                {(this.props.userNameToReply) ? `@${this.props.userNameToReply}`: ''}
                </textarea>
                <div className="buttonsInput">
                    <button className="closeInput" onClick={this.props.onCloseText}> Cerrar </button>
                    <button className="sendInput" type="submit"> Enviar</button>
                    
                    </div>
        </form> 
        )
    }
}

export default InputText