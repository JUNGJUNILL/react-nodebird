import react,{useEffect} from 'react' //next에서는 이거 안해도 된다. 
import {Form,Input,Checkbox,Button,Card,Icon,Avatar} from 'antd'
import {useDispatch,useSelector, connect} from 'react-redux'
import { loginAction,logOutAction , LOG_IN, LOG_OUT} from '../reducers/user';

const dummy = {
        isLoggedIn : true, 
        imagePaths : [], 
        mainPosts : [{
            User:{
                id:1,
                nickname:'정준일',
            },
            content:'첫번째 게시글',
            img:'https://cdn.eyesmag.com/wp-content/uploads/2019/05/2019-parasite-film-by-bong-reasons-to-be-waiting-06.jpg',
        }],
    }
    //react hooks 나오기 전 방식 
    //const Home = ({user,dispath,login,logout}) =>{

   //react hooks방식
   const Home = () =>{
 
    const dispath = useDispatch(); //리덕스 액션 실행기 

    const {user,isLoggedIn} = useSelector(state=>state.user); 
    const {mainPosts} = useSelector(state=>state.post); 
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
            {isLoggedIn && <Form style={{marginBottom: 20}} encType="multipart/form-data">
                <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었니?"/>
                <div>
                    <input type="file" multiple hidden />
                    <Button>이미지 업로드</Button>
                    <Button type="primary" style={{float:'right'}} htmlType="submit">짹짹</Button>
                </div>
                <div>
                    {dummy.imagePaths.map((v,i)=>{
                        return (
                                <div key={i} style={{ display:'inline-block'}}>
                                    <img src={`http://localhost:3065/`+v} style={{width:'200px'}} alt={v} />
                                    <div>
                                        <Button>제거</Button>
                                    </div>
                                </div>
                            )
                        })}
                </div>

            </Form>}
            {dummy.mainPosts.map((v,i)=>{
                return (
                    <Card key={i}
                        cover={v.img && <img alt="example" src={v.img}/>}
                        actions={[
                                    <Icon type="retweet" key="retweet"/>,
                                    <Icon type="heart" key="heart"/>,
                                    <Icon type="message" key="message"/>,
                                    <Icon type="ellipsis" key="ellipsis"/>,
                        ]}
                        extra={<Button>팔로우</Button>}
                    >
                        <Card.Meta 
                            avatar={<Avatar>{v.User.nickname[0]}</Avatar>}
                            title={v.User.nickname}
                            description={v.content}
                        />

                    </Card>
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