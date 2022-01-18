import { ADD_PERSON } from '../constant'

// 创建增加一个人的action对象
export const cerateAddPersonAction = personObj => ({type:ADD_PERSON, data:personObj})
