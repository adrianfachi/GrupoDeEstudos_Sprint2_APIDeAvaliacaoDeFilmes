import styles from "./styleCadastro.module.css"
import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api.js"

function CadastrarFilme() {
    const [filmes, setFilmes] = useState();

    useEffect(() => {
        async function carregaFilmes() {
            const { data:res } = await api.get('/filmes')
            setFilmes(res)
        }
        carregaFilmes()

    }, [])

    const nomeValue = useRef();
    const generoValue = useRef();
    const linkTrailer = useRef();
    const linkCapa = useRef();
    const popup = useRef()

    async function enviarInfo(event) {
        event.preventDefault();
        try {
            if(validaNome() && validaGenero() && validaLinkTrailer() && validaLinkCapa()) {
                await api.post("/filmes", {
                    nome: nomeValue.current.value,
                    genero: generoValue.current.value,
                    linkTrailer: linkTrailer.current.value,
                    linkCapa: linkCapa.current.value,
                    reviews: []
                })
                nomeValue.current.value = ""
                generoValue.current.value = ""
                linkTrailer.current.value = ""
                linkCapa.current.value = ""
                ativaPopup("Filme adicionado com sucesso!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    function validaNome() {
        if(nomeValue.current.value === "") {
            nomeValue.current.style.border = 'solid red'
            return false
        } else {
            nomeValue.current.style.border = 'none'
            const existe = filmes?.some(
                filme => filme.nome.toLowerCase() === nomeValue.current.value.toLowerCase()
            )
            if(!existe) {
                return true
            } else {
                ativaPopup("Esse filme ja existe")
                return false
            }
            
        }
    }

    function validaGenero() {
        if(generoValue.current.value === "") {
            generoValue.current.style.border = 'solid red'
            return false
        } else {
            generoValue.current.style.border = 'none'
            return true
        }
    }

    function validaLinkTrailer() {
        if (linkTrailer.current.value.includes("https://www.youtube.com/watch?v=") || linkTrailer.current.value.includes("https://youtu.be/") || linkTrailer.current.value === "") {
            return true
        } else {
            ativaPopup("Link do trailer deve ser do youtube!")
            return false
        }
    }

    function validaLinkCapa() {
        if (linkCapa.current.value.includes(".jpg") || linkCapa.current.value === "") {
            return true
        } else {
            ativaPopup("Link da capa deve ser .jpg!")
            return false
        }
    }

    function ativaPopup (valor) {
        popup.current.innerHTML = valor

        if (valor == "Filme adicionado com sucesso!") {
            popup.current.style.backgroundColor =  "rgb(197, 255, 197)";
        } else {
            popup.current.style.backgroundColor =  "rgba(255, 197, 197, 1)";
        }

        popup.current.className = (styles.popupAtivo);

        setTimeout(() => {
            popup.current.className = (styles.popup);
        }, 5000);
    }

    return (
        <div id={styles.principal}>
            <div ref={popup} className={styles.popup}></div>
            <h2 id={styles.titulo}>Cadastrar Filme</h2>
            <form id={styles.formulario} onSubmit={enviarInfo}>
                <input ref={nomeValue} className={styles.info} placeholder="Nome" type="text"/>
                <input ref={generoValue} className={styles.info} placeholder="Gênero" type="text"/>
                <input ref={linkTrailer} type="text" className={styles.info} placeholder="Link Trailer"/>
                <input ref={linkCapa} type="text" className={styles.info} placeholder="Link Capa"/>
                <button id={styles.cadastrar}>Cadastro</button>
            </form>
            <Link to="/" id={styles.menu}>Menu principal</Link>
        </div>  
    )
}

export default CadastrarFilme