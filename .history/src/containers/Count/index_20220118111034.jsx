import CountUI from "../../components/Count";
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, creatIncrementAsyncAction} from "../../redux/count_action";

// mapStateToProps函数的返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value-----状态
const mapStateToProps = state => ({count:state})

// mapDispatchToProps函数的返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value-----操作状态的方法
const mapDispatchToProps = dispatch => (
    {
        jia:number => dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        jianAsync:(number, time) => dispatch(creatIncrementAsyncAction(number, time)),
    }
)
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

