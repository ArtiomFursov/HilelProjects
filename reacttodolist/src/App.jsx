import './App.scss';
import React from 'react';
import Input from './components/Input';
import List from './components/List';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      list:[],
    }
    this.change = this.change.bind(this);
    this.del = this.del.bind(this);
  }
  change  (item)  {
  let a =  prompt('enter new value');
  item.value=a;
  this.setState({
    list:[...this.state.list]
  })
  };
  del  (item)  {
    this.state.list.splice(item.index,1);
    this.setState({
      list:[...this.state.list]
    })
    };
  createTask(value){
  const task={
    id:Date.now(),
    value,
    changeTask: this.change,
    onDel:this.del
  }
  this.setState({
    list:[...this.state.list, task]
  })
 }


  render(){
    return <div className='wrapper'>
     <Input onCreate={this.createTask.bind(this)}/>
     <List list={this.state.list}/>
     
    </div>
    
  }

}

export default App;
