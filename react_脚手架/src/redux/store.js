// 引入createStore 专门用于创建redux中最为核心的store对象 版本4可用

//import {configureStore}  from 'redux'

//  该文件专门用于暴露一个store对象 整个应用只有一个store对象
import { legacy_createStore as createStore,applyMiddleware} from 'redux'

import allReducers  from './reducer'
 
// 引入 redux-thunk 用于支持异步action
import { thunk } from 'redux-thunk'

// 引入redux 开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)) )