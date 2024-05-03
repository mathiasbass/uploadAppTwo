import React from 'react'
import Header from'../../components/header/header'
import './styles.css';
import Video from '../../assets/video.mp4'
import Cards from '../../components/cards';
import Footer from '../../components/footer/footer';


function Home() {
    return (
       <>
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src= {Video}/>
                        Seu navegador não possui suporte para vídeos
                    </video>
                    <div id='sinopse'>
                        <p className='description'>
                        Peter Quill deve reunir sua equipe para defender o universo e proteger um dos seus.
                        Se a missão não for totalmente bem-sucedida, isso pode levar ao fim dos Guardiões.
                        </p>
                        <button className='button'>Comprar Ingresso</button>
                    </div>
                </div>
                
            </div>
            <Cards />
            <Footer />
       </> 
        
    )
}

export default Home;