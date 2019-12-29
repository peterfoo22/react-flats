import React, { Component } from 'react';
import listofflats from '../../data/dataflats';
import Flatlist from '../components/flatlist'
import Flat from './flat';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFlats: listofflats,
      selectedGif: ""
    };
  }

  render() {
    return (
        <div>
         <Flatlist listofFlats={this.state.allFlats} selectGif="" />
        </div>
    );
  }
}

export default App;
