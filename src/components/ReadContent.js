import React, { Component } from 'react';

class ReadContent extends Component{
    render(){
      return (
        <atricle>
              <h2>{this.props.title}</h2>
              {this.props.desc}
        </atricle>
      );
    }
  }

export default ReadContent;