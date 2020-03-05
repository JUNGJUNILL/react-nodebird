
//------------------------------------ state
export const initialState = {

    isLoggedIn : false,     
    user:{
        nickname:'주닐정',
        Posts:[],
        Followings:[],
        Followers:[],

    },

}; 

//------------------------------------


//------------------------------------ setState
export const LOG_IN = 'LOG_IN'; //액션의 이름 
export const LOG_OUT = 'LOG_OUT'; 

export const loginAction = {
    type:LOG_IN,
    data:{
        nickname:'정준일', 
    }, 
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
                user:action.data,
            }
        }
        case LOG_OUT:{
            return {
                ...state,
                isLoggedIn:false,
                user:null,
            }
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