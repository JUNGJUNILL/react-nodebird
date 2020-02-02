import react from 'react' //next에서는 이거 안해도 된다. 
import Link from 'next/link'; 
import Head from 'next/head'; 
import  AppLayout from '../components/AppLayout'; 

const Home = () =>{

    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.min.css"/>
            </Head>
            <AppLayout>                
                <div>Hello Next</div>
            </AppLayout>
            
        </>
    ); 
}; 

export default Home; 