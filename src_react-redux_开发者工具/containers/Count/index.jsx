import React, {Component} from 'react';

import {connect} from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  creatIncrementAsyncAction
} from '../../redux/actions/count'
class Count extends Component {

  increment =() => {
    const {value} = this.selectNumber
    this.props.jia(value*1)
  }
  decrement =() => {
    const {value} = this.selectNumber
    this.props.jian(value*1)
  }
  incrementIfOdd =() => {
    const {value} = this.selectNumber
    if(this.props.count % 2 !==0){
      this.props.jia(value*1)
    }
  }
  incrementAsync =() => {
    const {value} = this.selectNumber
    this.props.jianAsync(value*1, 500)
  }

  render() {
    // console.log("UI组件接收到的props是:", this.props)
    return (
      <div>
        <h2>我是Count组件, 下方组件总人数为:{this.props.renshu}</h2>
        <h4>当前求和为：{this.props.count}</h4>
        <select ref={c => this.selectNumber=c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({count:state.he, renshu:state.rens.length}),     // state是redux保存的状态0
    // mapDispatchToProps的一般写法
    // dispatch => ({
    //     jia:number => dispatch(createIncrementAction(number)),
    //     jian:number => dispatch(createDecrementAction(number)),
    //     jianAsync:(number, time) => dispatch(creatIncrementAsyncAction(number, time)),
    // })
    // mapDispatchToProps的简写
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jianAsync:creatIncrementAsyncAction
    }
)(Count)



