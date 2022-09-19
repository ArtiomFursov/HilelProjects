import React, { Component } from 'react'
 class input extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
      
    }
    onChange(event){
       this.setState({
        value: event.target.value
       }) 
      
    }
    _handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            if(this.state.value !== ""){
                this.props.onCreate(this.state.value);
            }
        }
    }
    createTask() {
        if(this.state.value !== ""){
            this.props.onCreate(this.state.value);
        }
    }
  render() {
    return (
      <div className='container'>
      <input className='input' onChange={this.onChange.bind(this)} onKeyPress={this._handleKeyPress} />
      <button className='Button' onClick={this.createTask.bind(this)}>Add</button>
      </div>
    )
  }
}

export default input;