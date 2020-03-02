export const initialState = {
    mainPosts : [], 
}


const ADD_POST = 'ADD_POST'; 
const ADD_DUMMY = 'ADD_DUMMY'; 

const addPost = {
    type: ADD_POST,
}

const addDummy = {
    type:ADD_DUMMY,
    data:{
        content:'Hello',
        UserId:1,
        User : {
            nickname:'주닐정',
        },
    },
};



const reducer = (state = initialState , action)=>{

    switch(action.type){
        
        case ADD_POST:{
            return {
                ...state,
            };
        }
        case ADD_DUMMY:{
            return {
                ...state,
                mainPosts:[action.data, ...state.mainPosts],
            };
        }
        //default반드시 넣어줘야 한다. 
        default : {
            return {
                ...state,
            }
         }   
    }
};

export default reducer; 