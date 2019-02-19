import React, { Component } from 'react';
import './App.css';
import { Parents, GrandChildren } from './datsource';


class App extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      options: ["Get GrandChildrens", "Difference", "Compact"],
      selectedVals: ""
    }
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

  //differnce
  _difference = (arr1, arr2) => {
    var diff = [];
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
          diff.push(arr1[i])
        }
      }
    }
    return diff;
  }
  //ends


  //Compact

  _compact = (arr) => {
    var prohibted = [false, null, 0, "", undefined, NaN]
    var resultRemain = []
    resultRemain = []
    for (var i = 0; i < arr.length; i++) {
      if (prohibted.indexOf(arr[i]) == -1) {
        if (isNaN(arr[i]) == true && typeof (arr[i]) == "string") {
          resultRemain.push(arr[i])
        }
        if (isNaN(arr[i]) == false) {
          resultRemain.push(arr[i])
        }
      }
    }
    return resultRemain
  }
  //ends


  handleCompactChange = (e) => {
    console.log(e.target.value, "diff")
  }

  render() {
    return (
      <div className="App">
        {
          <input placeholder="Enter Category" onKeyPress={this.handleInputChange} />
        }
      </div>
    );
  }
}

export default App;
