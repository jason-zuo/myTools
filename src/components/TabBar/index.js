import React, { Component } from 'react';
import './tabBar.scss';
class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static defaultProps = {

  };

  componentDidMount() {
  }

  componentWillMount() {
  }

  render() {
    return (
      <div id="TabBar">
        {this.props.children}
      </div>
    );
  }
}

export default TabBar;
