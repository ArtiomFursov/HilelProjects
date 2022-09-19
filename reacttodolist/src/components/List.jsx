import React, { Component } from 'react';
 class List extends Component {  
  render() {
   
    return (
        
     <ul className='list'>
       { this.props.list.map((item,index)=>{
        item.index=index;
         return <li key={item.id}>{item.value} 
         <button className='change' onClick={()=>
         item.changeTask(item)}>change</button>
          <button className='del' onClick={()=>item.onDel(item)}>delete</button>
         </li>;
       })

       }
     </ul>
    )
  }
}
export default List;