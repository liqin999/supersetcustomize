import React, { Component } from 'react';
import {Select } from 'antd';
const Option = Select.Option;
export default class SelectItem extends  Component{
  constructor(props){
      super(props);
      this.state={
      }
  }
  render(){
    let {item,handleChange} = this.props;
    console.log(item);
    let children = null;
    children = item.options.map((el,index)=>{//根据数据进行循环得到下拉
          return (
             <Option key={el.id}>{el.val}</Option>
          )
     })
  	return (
  	        <div>
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