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
      //处理单选和多选字段的统一
      if(typeof(value) == 'string'){
          value = new Array(value);
      }
      let {postDataObj} = this.props;
       postDataObj[this.props.item.id] = value;//按照父集和子集的id进行存储
       if(typeof postDataObj[this.props.item.id] == 'object'){
             postDataObj[this.props.item.id] = postDataObj[this.props.item.id];
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
  	        <div data-id={item.id} style={{position: 'relative'}} id='filterSelect'>
                   <div>{item.title}</div>
                    <Select
                      getPopupContainer={() => document.getElementById('filterSelect')}
                      allowClear = {true}
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