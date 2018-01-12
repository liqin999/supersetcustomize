import React, { Component } from 'react';
import { Icon ,Card,Col, Row ,Select } from 'antd';
import { BrowserRouter, Route, Link ,Switch,Redirect} from "react-router-dom";
const Option = Select.Option;
class App extends Component {
  constructor(props){
      super(props);
      this.state={
          children : [
            <Option key='0'>11</Option>,
            <Option key='1'>22</Option>,
            <Option key='2'>33</Option>,
          ]
      };
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
      console.log(`selected ${value}`);
  }
  render() {
    let {children} = this.state;
    let {handleChange} = this;
    return (
      <div className="custom_sel">
          <h2>定制页面<Icon type="star-o" style={{'marginLeft':'10px'}} /></h2>
           <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              <Col span={12}>
                  <Card style={{'minHeight':'450px'}} title="潜客--数量" bordered={false}>
                    <p className='text-center numCenter' >
                         <span>1234225万</span>
                    </p>
                  </Card>
              </Col>
              <Col span={12}>
                  <Card style={{'minHeight':'450px'}} title="潜客--筛选" bordered={false} >

                    <div>
                        <div>注册时间</div>
                        <Select
                              mode="multiple"
                              style={{ width: '100%' }}
                              placeholder="Please select"
                              onChange={handleChange}
                            >
                              {children}
                        </Select>
                    </div>


                    <div>
                        <div>省份</div>
                        <Select
                              mode="multiple"
                              style={{ width: '100%' }}
                              placeholder="Please select"
                              onChange={handleChange}
                            >
                              {children}
                        </Select>
                    </div>
                   
                   
                   </Card>
               </Col>
              </Row>
            </div>
      </div>
    );
  }
}

export default App;
