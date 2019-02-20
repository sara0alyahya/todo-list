// import React, { Component } from 'react';
// import './App.css';
// // // import ListItem from './ListItem';

// class App extends Component {
//   state = {
//     formData: {
//       todoInfo: 'hello List',
//       items: [],
//     }
//   }
//   updateValue = (event) => {
//     const newList = event.target.value;
//     const originalState = this.state.formData

//     const copy = Object.assign({}, originalState)
//     var key = event.target.name
//     copy[key] = newList
//     this.setState({ todoInfo: copy });
//   }

//   // submitForm = (event) => {
//   //   event.preventDefault();

//   //   const newItem = this.state.items;
//   //   newItem.push(this.state.value)
//   //   this.setState({
//   //     items: newItem
//   //   })
//   //   console.log(this.state.items);

//   // }
//   render() {
//     // const itemList = this.state.items.map((items) => {
//     //   return <p> {items}</p>
//     // })
//     return (

//       <div>
//         {/* <h1>hi</h1> */}
//         <form onSubmit={this.submitForm}>
//           <label> <h1>Todos </h1> <br />
//             <input type='text' name='todoInfo' onChange={this.updateValue} value={this.state.formData.todoInfo} placeholder={"What need to be done !"}></input>
//           </label>
//           <button type='submit'> Add ! </button>
//           <p> <span></span></p>
//         </form>
//         {/* <p>{itemList}</p> */}
//       </div>
//     );
//   }
// }

// export default App;





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

  updateForm = (event) => {
    const newData = event.target.value
    const originalState = this.state.formData
    const copy = Object.assign({}, originalState)
    const key = event.target.name
    copy[key] = newData
    this.setState({
      formData: copy
    })
  }
  submitForm = (event) => {
    event.preventDefault()
    const copy = this.state.list.slice(0)
    copy.push(this.state.formData.todoInfo)
    console.log(copy)
    this.setState({
      list: copy,

      formData: {
        todoInfo: ''
      }
    })
    // console.log(this.state.list)
  }
  deleteItems = (event) => {
    this.setState({
      list: [],

    })
  }

  removeItem = (index) => {
    console.log(index);
    const copy = this.state.list
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
