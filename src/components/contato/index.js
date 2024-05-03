import React from "react";
import './styles.css';
import Header from "../header/header";
import Footer from "../footer/footer";


function Contato() {
    
    return(
        <>
            <Header />

            <div id="banner"></div>

            <div className="form-conteudo">
                <div className="form-container">

                    <span className="span-form">Vamos Conversar!</span>

                    <div className="form"> 

                        <label for='name'>Nome</label>
                        <input type="name" id="name" placeholder="Seu Nome" required></input>

                        <label for='email'>E-mail</label>
                        <input type="email" id="email" placeholder="Seu E-mail" required></input>

                        <textarea id="text" rows="10">Deixe aqui sua Mensagem</textarea>

                        <button className="button">Enviar</button>

                    </div>

                    <Footer />

                </div>
            </div>
     
        </>
    )
}

export default Contato;