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
import withRedux from 'next-redux-wrapper' //next.js에서 리덕스 사용하기 위한 패키지 
import {createStore,compose,applyMiddleware} from 'redux'
import { typeAlias } from 'babel-types';
//------------------------------------------ 

//------------------------------------------ 리덕스 사가
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

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

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware]; //사가 미들웨어 리덕스에 연결 
        //미들웨어는 ACTION과 STORE 사이에서 동작한다. 
       
                         //compose 미들웨어 여러개 합성하는거 
        const enhancer = 
                        process.env.NODE_ENV ==='production' 
                        ?  compose(applyMiddleware(...middlewares))    
                        :  compose(
                                applyMiddleware(...middlewares),
                                //typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() :(f) => f,
                                !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() :(f) => f,
                                //서버 인 경우 window가 없으므로.. 
                                ) 
                                            
                                    //redux devtools 깔면 window에서 __REDUX_DEVTOOLS_EXTENSION__() 를 사용할 수 있다. 

        const store = createStore(reducer,initialState,enhancer); 
        sagaMiddleware.run(rootSaga);
        return store; 
})(NodeBird); 
//props를 넣어줌, store사용할 수 있게 해줌 
//제로초도 그냥 외우라고 함... 