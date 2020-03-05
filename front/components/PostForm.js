import react,{useEffect} from 'react'
import {Form, Input, Button} from 'antd'


const dummy = {
    isLoggedIn : true, 
    imagePaths:[],
    mainPosts:[{

            User:{
                id:1,
                nickname:'주닐정',
            },
            content:'첫번째 글',
            img:'https://cdn.eyesmag.com/wp-content/uploads/2019/05/2019-parasite-film-by-bong-reasons-to-be-waiting-06.jpg',
        
        }],
};


const PostForm = ()=>{

                return(
                            <Form style={{margin: '10px 0 20px'}} encType="multipart/form-data">
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
                            </Form>
                );

}
export default PostForm