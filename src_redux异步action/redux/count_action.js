/*该文件专门为Count组件生产action对象*/

import {DECREMENT, INCREMENT} from "./constant";

export const  createIncrementAction = data => ({type:INCREMENT,data})

export const createDecrementAction = data=>({type:DECREMENT, data})

// 异步action，就是指action的返回值为函数,异步action中一般都会调用同步action
export const creatIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}