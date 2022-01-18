import CountUI from "../../components/Count";
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, creatIncrementAsyncAction} from "../../redux/count_action";


// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({count:state}), 
    // mapDIspatchToProps的一般写法
    // dispatch => ({
    //     jia:number => dispatch(createIncrementAction(number)),
    //     jian:number => dispatch(createDecrementAction(number)),
    //     jianAsync:(number, time) => dispatch(creatIncrementAsyncAction(number, time)),
    // })
    // mapDIspatchToProps的精简写法
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jianAsync:creatIncrementAsyncAction
    }
)(CountUI)

