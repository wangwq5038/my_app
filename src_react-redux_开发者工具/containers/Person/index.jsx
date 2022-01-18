import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import {connect} from 'react-redux'
import {cerateAddPersonAction} from '../../redux/actions/person'
class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {id:nanoid(), name, age}
    this.props.jia(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render () {
    return (
      <div>
        <h2>我是Person组件, 上方求和为:{this.props.qiuhe}</h2>
        <input ref={c => this.nameNode = c} placeholder="输入名字"/>
        <input ref={c => this.ageNode = c} placeholder="输入年龄"/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.yiduiren.map((p)=>{
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({yiduiren:state.rens, qiuhe:state.he}), // 映射状态
  {
    jia:cerateAddPersonAction
  } // 映射操作状态的方法
)(Person)
