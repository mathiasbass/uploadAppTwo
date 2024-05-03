import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Footer from '../../components/footer/footer';

function Fotos() {
    return(
        <>
        <Header />

                <h1>Veja agora alguns personagens do filme:</h1>

                <div class="actor-cards-container">
                    <div class="cards-conteudo">
                        <div class="card banner-1"> </div>
                        <div class="card banner-2"> </div>
                        <div class="card banner-3"> </div>
                        <div class="card banner-4"> </div>
                        <div class="card banner-5"> </div>
                        <div class="card banner-6"> </div>
                        <div class="card banner-7"> </div>
                        <div class="card banner-8"> </div>
                        <div class="card banner-9"> </div>
                    </div>
                </div>
        <Footer />
        </>
    )
}

export default Fotos;