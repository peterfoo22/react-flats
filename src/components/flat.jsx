import React, { Component } from 'react';


class Flat extends Component {
  constructor(props){
    super(props)

  this.handleClick = this.handleClick.bind(this)

  }

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render(){
    const imageSource = `https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat${this.props.id}.jpg`

    return (
      <div className = "card">
        <img src = {imageSource} />

      </div>
    );
  }

}

export default Flat;

