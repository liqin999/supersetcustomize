import React, { Component } from 'react';
import { Icon ,Card,Col, Row ,Select } from 'antd';
import { BrowserRouter, Route, Link ,Switch,Redirect} from "react-router-dom";
import SelectItem from "./SelectItem.js";
var $ = require("jquery");
const Option = Select.Option;
class App extends Component {
  constructor(props){
      super(props);
      this.state={
        totalNum:132456789,
        selectList:[
            {
              title:'注册时间',//标题
              options:[//下拉选项
                  {
                    id:0,
                    val:'2016'
                  },{
                     id:1,
                     val:'2017'
                  },{
                     id:2,
                     val:'2018'
                  }
              ]

            },{
               title:'省份',
               options:[
                  {
                    id:0,
                    val:'北京'
                  },{
                     id:1,
                     val:'上海'
                  },{
                     id:2,
                     val:'南京'
                  }
              ]
            }
        ]
       
      };

      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount (){
    //向后台请求数据
    console.log($)
  }
  handleChange(value) {
      console.log(`selected ${value}`);
  }
  render() {
    let {totalNum} = this.state;
    let {handleChange} = this;
    return (
      <div className="custom_sel">
          <h2>定制页面<Icon type="star-o" style={{'marginLeft':'10px'}} /></h2>
           <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              <Col span={12}>
                  <Card  style={{'minHeight':'350px','height':`550px`}} title="潜客--数量" bordered={false}>
                    <p className='text-center numCenter' >
                         <span>{totalNum}</span>
                    </p>
                  </Card>
              </Col>
              <Col span={12}>
                  <Card title="潜客--筛选" bordered={false} >
                   <div style={{'minHeight':'350px','height':'446px','overflow':'auto'}}>
                    {
                      this.state.selectList.map((item,index)=>{
                          return (
                              <SelectItem key={index} {...{item,handleChange}}/>
                          )
                      })
                    }
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
