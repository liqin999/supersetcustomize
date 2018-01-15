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
              id:0,
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
               id:1,
               title:'省份',
               options:[
                  {
                    id:3,
                    val:'北京'
                  },{
                     id:4,
                     val:'上海'
                  },{
                     id:5,
                     val:'南京'
                  }
              ]
            }
        ]
       
      };

      this.onHandleChange = this.onHandleChange.bind(this);
      this.getFilterData = this.getFilterData.bind(this);
  }

  componentDidMount (){
    //向后台请求数据 请求所有的数据  引入环境变量
    let obj={//项后台发送的格式
        parentId:0,
        childrenId:''
    };
    this.getFilterData(obj);
  }

  getFilterData(obj){//obj代表不同下拉的请求的参数 
    let that = this;
      $.ajax({
          url:'https://easy-mock.com/mock/599d1648059b9c566dcc4206/house/gettotalnum',
          type:'post',
          data:obj,
          success:function(result){
              that.setState({
                 totalNum:result.data.total
              })
          }
      })
  }

  onHandleChange(obj) {
      console.log(obj)
      console.log('子组件返回的数据:'+obj.parentId);
      if(typeof obj.childrenId == 'object'){
          obj.childrenId = JSON.stringify(obj.childrenId)
      }
      this.getFilterData(obj);
  }
  render() {
    let {totalNum} = this.state;
    let {onHandleChange} = this;
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
                              <SelectItem key={index} {...{item,onHandleChange}}/>
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
