//레이아웃을 위한 파일을 next가 _app.js로 지정해 놓았다.  
//최상위 컴포넌트이다. 
//root 관리 
import React from 'react'; 
import AppLayout from '../components/AppLayout'; 
import Head from 'next/head'; 
import PropTypes from 'prop-types'; 

 
const NodeBird = ({Component}) =>{
                    //next.js에서 넣어줌

    return (
        <>
        <Head>
            <title>NodeBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.min.css"/>
        </Head>
          <AppLayout >
              <Component />
         </AppLayout>  
        </>
    ); 
};

NodeBird.propTypes ={
    Component : PropTypes.elementType
}


export default NodeBird; 