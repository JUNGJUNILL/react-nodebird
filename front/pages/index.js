import react from 'react' //next에서는 이거 안해도 된다. 
import Link from 'next/link'; 

const Home = () =>{

    return (
        <>
            <Link href="/about"><a>about</a></Link>
            <div>Hello Next</div>
        </>
    ); 
}; 

export default Home; 