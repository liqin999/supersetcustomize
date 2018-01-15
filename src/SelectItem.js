import React, { Component } from 'react';
import {Select } from 'antd';
const Option = Select.Option;
export default class SelectItem extends  Component{
  constructor(props){
      super(props);
      this.state={
          'obj':{
            'parentId':this.props.item.id,
            'childrenId':''
          }
      };
      this.handleChange= this.handleChange.bind(this);
  }
  handleChange(value) {
       let obj = {};
       obj.parentId = this.props.item.id;
       obj.childrenId = value;
       this.props.onHandleChange(obj)
  }
  render(){
    let {item,onHandleChange} = this.props;
    let {handleChange} = this;
    let children = null;
    children = item.options.map((el,index)=>{//根据数据进行循环得到下拉
          return (
             <Option key={el.id}>{el.val}</Option>
          )
     })
  	return (
  	        <div data-id={item.id}>
                   <div>{item.title}</div>
                    <Select
                     mode="multiple"
                     style={{ width: '100%' }}
                      placeholder="Please select"
                      onChange={handleChange}
                      >
                      {children}
                     </Select>
              </div>
  	)

  }


}