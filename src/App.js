import React, { Component } from 'react';
import './App.css';
import Checkbox from './Checkbox';


class App extends Component {
  state = {
    formData: {
      todoInfo: ' '
    },
    list: [],

  }
  // Add to the form with new value 
  updateForm = (event) => {
    // get the value the user entered
    const newData = event.target.value
    // get the original state value 
    const originalState = this.state.formData
    // create copy of the originalState
    const copy = Object.assign({}, originalState)
    // create key to store the name of the input 
    const key = event.target.name
    // update the copy to the value the user entered
    copy[key] = newData
    this.setState({
      // update the state with the new copy
      formData: copy
    })
  }
  submitForm = (event) => {
    // prevent the form from refreshing the page
    event.preventDefault()
    // add the new data to the array[]
    const copy = this.state.list.slice(0)
    // update the state wuth our new copy
    copy.push(this.state.formData.todoInfo)
    console.log(copy)
    this.setState({
      list: copy,
      //let the input empty to write again 
      formData: {
        todoInfo: ''
      }
    })
    // console.log(this.state.list)
  }
  //delete button to delete all of the list array and clear the form 
  deleteItems = (event) => {
    this.setState({
      list: [],

    })
  }
  // to remove one item from the form 
  removeItem = (index) => {
    console.log(index);
    //create copy of the list array 
    const copy = this.state.list
    // splice one index from the array 
    copy.splice(index, 1)
    this.setState({
      list: copy,
    })
  }


  render() {
    const list = this.state.list.map((todo, index) => <Checkbox todo={todo} index={index} removeItem={this.removeItem} />)

    return (
      <div className='mainDiv'>
        <form onSubmit={this.submitForm}>
          <br />
          <br />
          <label> <h1>Todos </h1> <br />
            <input type='text' name='todoInfo' className='input' onChange={this.updateForm} value={this.state.formData.todoInfo} placeholder={"What's need to be done !"}></input>

          </label>
          <button type='submit' > Add ! </button>
          <button onClick={this.deleteItems}> Delete ! </button>
        </form>
        {list}
        {/* <div className='qoute'>
          <p>Made with 💜 ― SARA ALYAHYA</p>
        </div> */}
      </div>
    );
  }
}

export default App;
