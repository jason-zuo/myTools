import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomeList } from '../../redux/action/list';
import './list.scss';
@connect(
    (state) => {
        return {list: state.list.list}
    },
    {fetchHomeList}
)
export default class List extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchHomeList()
  }

  renderPaper = (data, index) => {
      return (
          <div className="paperItem" key={index}>
              <img src={data['imgUrl']} alt=""/>
          </div>
      )
  }
    render() {
      let { list } = this.props;
        console.log(list)
        return (
          <div className="homeContainer">
              {
                  list.map((value, index) => {
                      return this.renderPaper(value, index)
                  })
              }
          </div>
        );
  }
}
