
const dummyUser = {
    nickname:'주닐정',
    Post:[],
    Followings:[],
    Followers:[],
    signUpData:{},
};
//------------------------------------ state
export const initialState = {

    isLoggedIn : false,     
    user:null,

}; 

//------------------------------------


//------------------------------------ setState
export const SIGN_UP = 'SIGN_UP'; 
export const LOG_IN = 'LOG_IN'; //액션의 이름 
export const LOG_OUT = 'LOG_OUT'; 

//action에 넣을 데이터가 동적인 경우에는 action을 함수로 만들어야 한다.
export const SignUpAction = (data)=>{
    return {
        
        type:SIGN_UP, 
        data:data, 
    };
}
export const loginAction = {
    type:LOG_IN,
}

export const logOutAction = {
    type:LOG_OUT,
}


const reducer = (state = initialState , action)=>{

    switch(action.type){
        
        case LOG_IN:{
            return {
                ...state,
                isLoggedIn:true,
                user:dummyUser,
            };
        }
        case LOG_OUT:{
            return {
                ...state,
                isLoggedIn:false,
                user:null,
            }
        }

        case SIGN_UP : {
            return {
                ...state,
                signUpData : action.data,
            };
        }

        default : {
            return {
                ...state,
            }
        }

    }


};

//------------------------------------.




export default reducer; 