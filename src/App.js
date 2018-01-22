import React, { Component } from 'react';
import { Icon ,Card,Col, Row ,Select } from 'antd';
import { BrowserRouter, Route, Link ,Switch,Redirect} from "react-router-dom";
import SelectItem from "./SelectItem.js";
import {getDomain,mockData,initData} from './interface';
var $ = require("jquery");
const Option = Select.Option;
class App extends Component {
  constructor(props){
      super(props);
      this.state={
        totalNum:Number(),// 查询的数据量
        postDataObj:{},//向后台发送的数据对象
        selectList:[]//后端下拉的列表
      };
      this.onHandleChange = this.onHandleChange.bind(this);
      this.getFilterData = this.getFilterData.bind(this);
  }
  componentDidMount (){
    //初始化的时候默认显示右侧的下拉列表和默认的数据
     this.getselectlist();   
  }

  getselectlist(){//获得下拉数据
    let that = this;
      $.ajax({
         //真实地址  getDomain() + '/customization/kylin/init',
         //测试地址   mockData.initData,
          url: getDomain() + '/customization/kylin/init',
          success:function(result){
            if(typeof(result) == 'string'){
                result = JSON.parse(result);
            };
              let selectList = result.oldCustData.selectList;
               selectList.forEach((item,index)=>{//使用数组的forEach遍历
                    item.options.forEach((_item,_index)=>{
                        if(_item.val == null){
                           _item.val = 'null';
                        }
                        if(_item.val == ''){
                           _item.val = ' '
                        }
                       _item.id = _item.val
                   })
                });
               let totalNum = result.oldCustData.data.total;
               that.setState({
                   totalNum,
                  selectList
                });
          }
      })
  }

  getFilterData(obj){//obj代表不同下拉的请求的参数 左侧查询数量
    let that = this;
      for(var attr in obj){
        if(obj[attr].length == 0){
          delete obj[attr]
        }
      };
     obj = typeof(obj) == 'object' ? JSON.stringify(obj) : obj;
      
    
     /*obj = obj.replace(/\\/g,'');*/
      $.ajax({
         //真实地址   getDomain() + '/customization/kylin/query',
         //测试地址   mockData.gettotalnum,
          url: getDomain() + '/customization/kylin/query',
          type:'post',
          data:{
            'params':obj
          },
          success:function(result){
           if(typeof(result) == 'string'){
                result = JSON.parse(result);
            };
              that.setState({
                 totalNum:result.data.total
              })
          }
      })
  }

  onHandleChange(obj) {
      this.getFilterData(obj);
  }
  render() {
    let {totalNum,postDataObj} = this.state;
    let {onHandleChange} = this;
  
    return (
      <div className="custom_sel">
          <h2>定制页面<Icon type="star-o" style={{'marginLeft':'10px'}} /></h2>
           <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              <Col span={12}>
                  <Card  style={{'minHeight':'350px','height':`550px`}} title="老客--数量" bordered={false}>
                    <p className='text-center numCenter' >
                         <span>{totalNum}</span>
                    </p>
                  </Card>
              </Col>
              <Col span={12}>
                  <Card title="老客--筛选" bordered={false} >
                   <div style={{'minHeight':'350px','height':'446px','overflow':'auto'}}>
                    {
                      this.state.selectList.map((item,index)=>{
                          return (
                              <SelectItem key={index} {...{item,onHandleChange,postDataObj}}/>
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
