import React, {Component} from 'react';
import styles from './input-text.css';

function InputText ({onSendText, userNameToReply, onCloseText }){
    
        return(
        <form className="formInput"  onSubmit={onSendText} >
                <textarea className="textInput" name="textarea" > 
                {(userNameToReply) ? `@${userNameToReply}`: ''}
                </textarea>
                <div className="buttonsInput">
                    <button className="closeInput" onClick={onCloseText}> Cerrar </button>
                    <button className="sendInput" type="submit"> Enviar</button>
                    
                    </div>
        </form> 
        )
  
}

export default InputText