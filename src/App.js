import React, { Component } from 'react';

import { TabBar } from 'antd-mobile';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
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
              <i className="iconfont iconhome" style={{ fontSize: '24px', color: '#ffcb00' }} />
)}
            selectedIcon={(
              <i className="iconfont iconhome" style={{ fontSize: '24px', color: '#000' }} />
)}
            selected={this.state.selectedTab === 'home'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
              <div className="ac">sdf</div>
          </TabBar.Item>
        </TabBar>
      </>
    );
  }
}

export default App;
