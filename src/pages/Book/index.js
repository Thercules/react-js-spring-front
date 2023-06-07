import React, { useState, useEffect } from "react";
import './styles.css';
import logo from '../../assets/LogoVB.png'
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';
import api from "../../services/api";

export default function Books(){

    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const history = useHistory();

    const [books, setBooks] = useState([]);

    //Function Logout
    async function logout(){
        localStorage.clear();
        history.push('/');
    }

    async function editBook(id){
        try {
            history.push(`book/new/${id}`)
        } catch (err) {
            alert('Erro ao editar o livro');
        }
    }

    //Function deletar livros
    async function deleteBook(id){
        try {
            await api.delete(`api/book/v1/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            setBooks(books.filter(book => book.id !== id))
        } catch (err) {
            alert("Falha ao deletar");
        }
    }

    //Pré carregar os livros independente da ação do usuário
    useEffect(() =>{
        api.get('api/book/v1', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }, params: {
                page: 1,
                limit: 8,
                direction: 'asc'
            }
        }).then(response => {
            setBooks(response.data._embedded.bookVoes)
        })
    })

    return (
       <div className="book-container">
            <header>
                <img src={logo} alt="logo"/>
                <span>Seja bem-vindo, <strong>{username.toUpperCase()}</strong></span>
                <Link className="button" to="book/new/0">Add new book</Link>
                <button onClick={logout} type="button">
                    <FiPower size={18} color="#251fc5"/>
                </button>
            </header>

            <h1>Livros Registrados</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                    <strong>Título:</strong>
                    <p>{book.title}</p>

                    <strong>Autor:</strong>
                    <p>{book.author}</p>

                    <strong>Preco:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(book.price)}</p>

                    <strong>Data de publicação:</strong>
                    <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>

                    <button onClick={() => editBook(book.id)} type="button">
                        <FiEdit size={20} color="#251FC5"/>
                    </button>

                    <button onClick={() => deleteBook(book.id)} type="button">
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>
                ))}
            </ul>
       </div>
    );
}