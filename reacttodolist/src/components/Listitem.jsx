import React, { Component } from 'react'

 class Listitem extends Component {
   
  render() {
     const { item } = this.props;
     console.log(this.props)
    return (
      <li style={{listStyle:'none'}}>{ item.value } <button>del</button></li>
    )
  }
}
export default Listitem;