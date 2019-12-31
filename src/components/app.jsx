import React, { Component } from 'react';
import listofflats from '../../data/dataflats';
import Flatlist from './flatlist';
import Flat from './flat';
import SimpleMap from './googleMap'

//flatlist, and simple, both components created and put into main app

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFlats: listofflats,
      selectedFlat: "1"
    };
  }

  selectFlat = (id) => {
    this.setState({
      selectedFlat: id
    });
  }

  render() {
    return (
      <div>
        <Flatlist listofFlats={this.state.allFlats} selectaFlat={this.selectFlat} />
        <SimpleMap lat = {this.state.allFlats[this.state.selectedFlat].lat}
                   long = {this.state.allFlats[this.state.selectedFlat].lng} />
      </div>


    );
  }
}

export default App;
