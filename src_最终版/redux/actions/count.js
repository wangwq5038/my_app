/*该文件专门为Count组件生产action对象*/

import {DECREMENT, INCREMENT} from "../constant";

// 同步action，就是指action的值为Object类型的一般对象
export const  increment = data => ({type:INCREMENT,data})


export const decrement = data=>({type:DECREMENT, data})

// 异步action，就是指action的返回值为函数,异步action中一般都会调用同步action
export const incrementAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time)
    }
}
