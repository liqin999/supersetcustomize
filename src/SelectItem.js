import React, { Component } from 'react';
import {Select } from 'antd';
const Option = Select.Option;
export default class SelectItem extends  Component{
  constructor(props){
      super(props);
      this.state={
          obj:{}
        
      };
      this.handleChange= this.handleChange.bind(this);
  }

  handleChange(value) {
       let {postDataObj} = this.props;
       postDataObj[this.props.item.id] = value;//按照父集和子集的id进行存储
       if(typeof postDataObj[this.props.item.id] == 'object'){
             postDataObj[this.props.item.id] = JSON.stringify(postDataObj[this.props.item.id])
       };
       this.props.onHandleChange(postDataObj);
  }
  render(){
    let {item,onHandleChange,postDataObj} = this.props;
    let {handleChange} = this;
    let children = null;
    children = item.options.map((el,index)=>{//根据数据进行循环得到下拉
          return (
             <Option key={el.id}>{el.val}</Option>
          )
     });

  	return (
  	        <div data-id={item.id}>
                   <div>{item.title}</div>
                    <Select
                      mode={item.isRadio ? '' : 'multiple'}
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