import React from 'react';
import EntryForm from './EntryForm.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getAllCows = this.getAllCows.bind(this);
    this.deleteACow = this.deleteACow.bind(this);
    this.addACow = this.addACow.bind(this)

  }

  //will need a function to get stuff
  getAllCows() {

  };

  deleteACow() {

  };

  addACow(addCowObj) {
    console.log(addCowObj);
  };

  //well need a funtion to updated stuff

  render () {
    return (
      <div>
        <EntryForm addACow = {this.addACow}/>
      </div>
    )
  }
}

export default App;