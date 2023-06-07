import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from 'react-router-dom';
import api from "../../services/api";
import './styles.css';
import logo from '../../assets/LogoVB.png'
import { FiArrowLeft } from 'react-icons/fi';

export default function NewBook(){

    const [id, setID] = useState('');
    const [author, setAuthor] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');

    const{bookId} = useParams();

    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const history = useHistory();

    async function loadBook() {
        try {
            const response = await api.get(`api/book/v1/${bookId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            let adjustedDate = response.data.launchDate.split("T", 10)[0]

            setID(response.data.id);
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setPrice(response.data.price);
            setLaunchDate(adjustedDate);

        } catch (error) {
           alert('Erro ao recuperar livro')
           history.push('/books');
        }
    }

    useEffect(() => {
        if (bookId === '0') return;
        else loadBook();
    }, [bookId])

    async function createNewBook(e){
        e.preventDefault();

        const data = {
            title,
            author,
            launchDate,
            price,
        }

        try {
            const response = await api.post('api/book/v1', data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            history.push('/books');

        } catch (error) {
            alert('Erro ao ler os livros, tente novamente!');
        }

    }

    return(
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="logo"/>
                    <h1>Adicionar Livro</h1>
                    <p>Coloque as informações do livro e clique em enviar! #### {bookId}</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251fc5"/>
                        Home
                    </Link>
                </section>
                <form onSubmit={createNewBook}>
                    <input 
                        placeholder="Titulo"
                        value={title}
                        onChange ={e => setTitle(e.target.value)}
                    />
                    <input placeholder="Autor"
                        value={author}
                        onChange ={e => setAuthor(e.target.value)}
                    />
                    <input 
                        type="date"
                        placeholder="Data"
                        value={launchDate}
                        onChange ={e => setLaunchDate(e.target.value)}
                    />
                    <input 
                        placeholder="Preco"
                        value={price}
                        onChange ={e => setPrice(e.target.value)}
                    />
                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}