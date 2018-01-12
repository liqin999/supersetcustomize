import React, { Component } from 'react';
import { Icon ,Button } from 'antd';
class App extends Component {
  render() {
    return (
      <div className="App">
           this is a page
           <Icon type="link" />
           <Button type="primary">Primary</Button>
      </div>
    );
  }
}

export default App;
