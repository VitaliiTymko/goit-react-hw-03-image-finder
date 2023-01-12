import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    console.log('ComponentDidMount modal');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate modal');
  }

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <h2>Тут будет модалка с картинкой</h2>
          {/* {this.props.children} */}
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    );
  }
}
