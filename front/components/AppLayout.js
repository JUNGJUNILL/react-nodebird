import React from 'react'
import {Menu, Input,Button,Row, Col,Card,Avatar} from 'antd'
import Link from 'next/link'; 
import PropTypes from 'prop-types'; 
import LoginForm from './LoginForm'; 
import UserProfile from './UserProfile'
import {useSelector} from 'react-redux'


const AppLayout = ({children}) =>{
    const {isLoggedIn} = useSelector(state=>state.user); 


    return(
            <div>
            <Menu mode="horizontal">    
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle'}}/>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/*xs:모바일, sm:작은화면, md:중간화면, lg:큰 화면*/}
                <Col xs={24} md={6}>
                   {isLoggedIn 
                   ?<UserProfile />
                   :<LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>세번째</Col>
            </Row>
   
            </div>
    ); 
}

AppLayout.propTypes ={
    children : PropTypes.elementType,
}


export default AppLayout; 