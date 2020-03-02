//레이아웃을 위한 파일을 next가 _app.js로 지정해 놓았다.  
//최상위 컴포넌트이다. 
//root 관리 
import React from 'react'; 
import AppLayout from '../components/AppLayout'; 
import Head from 'next/head'; 
import PropTypes from 'prop-types'; 


//------------------------------------------ 리덕스 
import reducer from '../reducers'; 
import {Provider} from 'react-redux'; 
import withRedux from 'next-redux-wrapper'
import {createStore,compose,applyMiddleware} from 'redux'
import { typeAlias } from 'babel-types';
//------------------------------------------ 
 
const NodeBird = ({Component,store}) =>{
                    //next.js에서 넣어줌

    return (
        <>
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.min.css"/>
            </Head>
            <AppLayout >
                <Component />
            </AppLayout>  
         </Provider>
        </>
    ); 
};

NodeBird.propTypes ={
    Component : PropTypes.elementType,
    store     : PropTypes.object,
}


export default withRedux((initialState,options)=>{

        const middlewares = []; 
        //미들웨어는 ACTION과 STORE 사이에서 동작한다. 
       
                         //compose 미들웨어 여러개 합성하는거 
        const enhancer = compose(
                                applyMiddleware(...middlewares),
                               //typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() :(f) => f,
                               !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() :(f) => f,
                               //서버 인 경우 window가 없으므로.. 
                               ); 
     

        const store = createStore(reducer,initialState,enhancer); 
        return store; 
})(NodeBird); 
//props를 넣어줌, store사용할 수 있게 해줌 
//제로초도 그냥 외우라고 함... 