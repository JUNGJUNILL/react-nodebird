import react,{useEffect} from 'react' //next에서는 이거 안해도 된다. 
import PostForm from '../components/PostForm'; 
import PostCard from '../components/PostCard'; 
import {Form,Input,Checkbox,Button,Card,Icon,Avatar} from 'antd'
import {useDispatch,useSelector, connect} from 'react-redux'
import { loginAction,logOutAction , LOG_IN, LOG_OUT} from '../reducers/user';

    //react hooks 나오기 전 방식 
    //const Home = ({user,dispath,login,logout}) =>{

   //react hooks방식
   const Home = () =>{
 
    const dispath = useDispatch(); //리덕스 액션 실행기 

    const {user,isLoggedIn} = useSelector(state=>state.user); 
    const {mainPosts}   = useSelector(state=>state.post); 
                 //useSelector로 리덕스 state전체를 가져올 수 있다. 
                 //useState가 useSelector로 바뀌었다고 생각하자.

    console.log(user); 
    useEffect(()=>{
        // dispath({
        //     type:LOG_IN, 
        //     data:{
        //         nickname:'준일정',
        //     }
        // })
        dispath(loginAction); 

    },[]); 

/*
useEffect(()=>{

    login(); 

},[])
*/
    return (
       
        <div>
            {user ? <div>로그인 했습니다.{user.nickname}</div> : <div>로그아웃 했습니다.</div>}
            {isLoggedIn && <PostForm />}
            {mainPosts.map((v,i)=>{
                return (
                        <PostCard  key={i} post={v}/>
                        );
            })}
        </div>
    ); 
}; 
/*
//리덕스 state를 리엑트 props로 만들겠다.
//react hooks 나오기 전 방식 
function mapStateToProps(state){
    return {
        user:state.user,
    }
}

function mapDispatchToProps(dispath){
    return{
        login: ()=>dispath(loginAction), 
        logout:()=>dispath(logOutAction), 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
*/
export default (Home); 