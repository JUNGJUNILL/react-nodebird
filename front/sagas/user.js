

import {all, fork, put, call, takeLatest} from 'redux-saga/effects'; 
import { LOG_IN,LOG_IN_SUCCESS,LOG_IN_FAILURE } from '../reducers/user';

//call은 함수 동기적 호출 
//fork는 함수 비동기적 호출 
//put은 dispatch와 동일 

function loginAPI(){
//서버에 요청 보내는 부분... 

}

function* login(){

    try{
        yield call(loginAPI); 
        yield put({
            type:LOG_IN_SUCCESS,
        });

    }catch(e){

        console.error(e); 
        yield put({
            type:LOG_IN_FAILURE,
        });
        
    }

}

function* watchLogin(){
    yield takeLatest(LOG_IN,login); 
}

export default function* postSaga(){
   yield all([

        fork(watchLogin),
    ]);
}