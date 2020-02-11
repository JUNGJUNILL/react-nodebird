import react from 'react' //next에서는 이거 안해도 된다. 
import {Form,Input,Checkbox,Button,Card,Icon,Avatar} from 'antd'

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
const Home = () =>{

    return (
       
        <div>
            {dummy.isLoggedIn && <Form style={{marginBottom: 20}} encType="multipart/form-data">
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

export default Home; 