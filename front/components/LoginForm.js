import React, {useState,useCallback} from 'react'; 
import {Form,Button} from 'antd'
import Link from 'next/link';
import {useInput} from '../pages/signup'; //<- export const 받는 방법 
import {useDispatch} from 'react-redux'
import { loginAction} from '../reducers/user';

/*
        export const useInput =(initValue = null) =>{
            const [value,setter] = useState(initValue); 
            const handler = useCallback((e) =>{
                setter(e.target.value); 
            },[])
            return [value,handler]; 
        }

*/

const LoginForm = () =>{

    const [id,onChangeId] = useInput(''); 
    const [password,onChangePassword] = useInput(''); 
    const dispatch  = useDispatch(); 

                        //자식 컴포넌트에 넘기는 함수는 무조건 useCallback(아직 공부가 안됨)
    const onSubmitForm =useCallback((e) =>{
        e.preventDefault(); 
        dispatch(loginAction); 
        console.log({
            id,
            password
        })
    },[id,password]); 

    return (

        <Form onSubmit={onSubmitForm} style={{padding:'10px'}}>
            <div>
                <label htmlFor="user-id" >아이디</label>
                <br />
                <input name="user-id" value={id} onChange={onChangeId}/>
            </div>
            <div>
            <label htmlFor="user-password">패스워드</label>
                <br />
                <input type="password" name="user-password" value={password} onChange={onChangePassword} />
            </div>
            <div style={{marginTop: '10px'}}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>

    ); 



}

export default LoginForm; 
