import React, { Component } from 'react';


class Flat extends Component {
  constructor(props){
    super(props)

  this.handleMouseOver = this.handleMouseOver.bind(this)
  this.handleMouseOut = this.handleMouseOut.bind(this)

  }

  handleMouseOver = (event) => {
      if (event.target.className === "card"){
        event.target.className = "card active"
      }


      this.props.selectaFlat(this.props.id);
  }

  handleMouseOut = (event) =>{
    if (event.target.className === "card active"){
        event.target.className = "card"
      }
  }



  render(){
    const imageSource = `https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat${this.props.id + 1}.jpg`

    return (
        <React.Fragment>
          <div className="card" style={{
                backgroundImage: "url(" + `${imageSource}` + ")",
              }} onMouseOver = {this.handleMouseOver} onMouseOut = {this.handleMouseOut} >
              <div className="card-category">{this.props.price} EUR</div>
              <div className="card-description">
                <h2>{this.props.name}</h2>
              </div>

        </div>
        </React.Fragment>
    );
  }

}

export default Flat;

