import React, {useState,useCallback,memo} from 'react'
import {Form,Input,Checkbox, Button} from 'antd'
import PropTypes from 'prop-types'; 

//props로 넘겨주는 함수는 useCallback 필수 
// useCallback(callback,[]);

//setState는 전체 리렌더링된다. 

//지나친 최적화 
// const TextInput = memo(({value,onChange}) =>{

//     return (
//         <Input name="user-id" value={value} required onChange={onChange}/>
//     ); 
// }); 


 const TextInput =({value}) =>{

     return (
     <div>{value}</div>
   ); 
 }; 
 
 TextInput.propTypes = {
    value : PropTypes.string,
 }

    //커스텀 hooks
    //export const 시 다른데서 import해서 사용할 수 있다. 
    export const useInput =(initValue = null) =>{
        const [value,setter] = useState(initValue); 
        const handler = useCallback((e) =>{
            setter(e.target.value); 
        },[])
        return [value,handler]; 
    }


const Signup = () =>{

      
        const [id,onChangeId] = useInput(''); 
        const [nick,onChangeNick] = useInput(''); 
        const [password,onChangePassword] = useInput(''); 
        
        const [passwordCheck, setPasswordCheck] = useState(''); 
        const [term, setTerm] = useState(false); 
        const [passwordError,setPasswordError] = useState(false); 
        const [termError,setTermError] = useState(false); 

        const onSubmit = useCallback((e) =>{
            e.preventDefault();
            if(password !== passwordCheck){
                return setPasswordError(true); 
            }

            if(!term){
                return setTermError(true); 
            }
        },[password,passwordCheck,term]);

        const passwordChk  = useCallback((e) =>{
            setPasswordError(e.target.value !== password); 
            setPasswordCheck(e.target.value);
        },[password]) 
        
        const onchangeTerm  = useCallback((e) =>{
            setTermError(false); 
            console.log(e.target.checked); 
            setTerm(e.target.checked); 
        },[]);



       
        

    return( 
        <>
            <Form onSubmit={onSubmit} style={{padding:10}}>
                    <TextInput value={1234}></TextInput>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                       <Input name="user-id" value={id} required onChange={onChangeId}/>
                        {/*<TextInput value={id} required onChange={onChangeId}/>*/}
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                         <Input name="user-nick" value={nick} required onChange={onChangeNick}/>
                       {/*<TextInput value={nick} required onChange={onChangeNick}/>*/}
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input name="user-password" value={password} type="password" required onChange={onChangePassword}/>
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호확인</label>
                        <br />
                        <Input name="user-password-check" value={passwordCheck} type="password" required onChange={passwordChk}/>
                        {passwordError && <div style={{color:"red"}}>비밀번호가 다릅니다.</div>}
                        </div>
                    <div>
                    <Checkbox name="user-term"  onChange={onchangeTerm}>동의 하시겠습니까?</Checkbox>
                    {termError && <div style={{color:"red"}}>약관에 동의 하셔야 합니다.</div>}
                    </div>
                    <div style={{marginTop:10}}>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
            </Form>
        </>
    ); 
}

export default Signup;