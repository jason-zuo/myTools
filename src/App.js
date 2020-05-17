import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Other from './pages/other';
import Weather from './pages/weather/weather';
import List from './pages/list';

import './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={false}
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={(
              <i
                className="iconfont iconhome"
                style={{ fontSize: '24px', color: '#ffcb00' }}
              />
                          )}
            selectedIcon={(
              <i
                className="iconfont iconhome"
                style={{ fontSize: '24px', color: '#000' }}
              />
                          )}
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            <List />
          </TabBar.Item>
          <TabBar.Item
            title="天气"
            key="weather"
            icon={(
              <i
                className="iconfont iconweather_duoyun"
                style={{ fontSize: '24px', color: '#ffcb00' }}
              />
                          )}
            selectedIcon={(
              <i
                className="iconfont iconweather_duoyun"
                style={{ fontSize: '24px', color: '#000' }}
              />
                          )}
            selected={this.state.selectedTab === 'weather'}
            onPress={() => {
              this.setState({
                selectedTab: 'weather',
              });
            }}
            data-seed="logId"
          >
            <Weather />
          </TabBar.Item>
          <TabBar.Item
            title="其他"
            key="other"
            icon={(
              <i
                className="iconfont iconzapin"
                style={{ fontSize: '24px', color: '#ffcb00' }}
              />
                          )}
            selectedIcon={(
              <i
                className="iconfont iconzapin"
                style={{ fontSize: '24px', color: '#000' }}
              />
                          )}
            selected={this.state.selectedTab === 'other'}
            onPress={() => {
              this.setState({
                selectedTab: 'other',
              });
            }}
            data-seed="other"
          >
            <Other />
          </TabBar.Item>
        </TabBar>
      </>
    );
  }
}
