import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
           <button className='searchBtn' onClick={this.props.search}>Find</button>
        );
    }
}

export default Button;