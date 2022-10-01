import React, {Component} from 'react';
import Button from "./Button";
import { Link } from "react-router-dom";
class Input extends Component {
    constructor() {
        super();
        this.state={
            value:''
        }
    }
    onChange(event){
        this.setState({
            value: event.target.value
        })
    }
    search(){
        if(this.state.value !== ""){

            window.location.assign('http://localhost:3000/weather/'+this.state.value);


        }
    }
    _handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            if(this.state.value !== ""){

                        window.location.assign('http://localhost:3000/weather/'+this.state.value);


            }


        }
    }

    render() {
        return (
            <div className='Search'>
                <input className='input' onChange={this.onChange.bind(this)} onKeyPress={this._handleKeyPress.bind(this)}/><Button search={this.search.bind(this)} />
            </div>

        );
    }
}

export default Input;