import React, { Component } from 'react';
import './App.css';
import { GrandParents, Parents, GrandChildren } from './datsource';


class App extends Component {
  constructor(props, context) {
    super(props);

  }

  handleInputChange = (e) => {
    let userInput = e.target.value.toString();

    //method 1

    // if (userInput === "cat_1" || userInput === "cat_2" || userInput === "cat_3") {
    //   GrandParents.map((val) => {
    //     GrandChildren.map((data, index) => {
    //                 if (userInput == val.category) {
    //         if (val.category == data.category.split("_")[0] + "_" + data.category.split("_")[1]) {
    //             console.log(data)
    //         }
    //       }
    //     })
    //   })
    // }

    //method2


    Parents.map((data) => {
      GrandChildren.map((values) => {
        if (values.parent == data.id && data.parent == userInput) {
          console.log(values)
        }
      })
    })
  }
  render() {
    return (
      <div className="App">
        <input placeholder="Enter Category" onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
