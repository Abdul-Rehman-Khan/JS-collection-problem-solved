import React, { Component } from 'react';
import './App.css';
import { GrandParents, Parents, GrandChildren } from './datsource';


class App extends Component {
  constructor(props, context) {
    super(props);

  }

  handleInputChange = (e) => {
    if (e.key === 'Enter') {
      let userInput = e.target.value.toString();
      let Result = [];
      Parents.map((data) => {
        GrandChildren.map(values =>
          values.parent == data.id && data.parent == userInput ?
            Result.push(values) : ""
        )
      })
      console.log(Result)
    }
  }
  render() {
    return (
      <div className="App">
        <input placeholder="Enter Category" onKeyPress={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
