import React from "react";
import './styles.css';
import logo from '../../assets/LogoVB.png'
import {Link} from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

export default function Books(){
    return (
       <div className="book-container">
            <header>
                <img src={logo} alt="logo"/>
                <span>Seja bem-vindo, <strong>Thiago</strong></span>
                <Link className="button" to="book/new">Add new book</Link>
                <button type="button">
                    <FiPower size={18} color="#251fc5"/>
                </button>
            </header>

            <h1>Livros Registrados</h1>
            <ul>
                <li>
                    <strong>Título:</strong>
                    <p>Docker Deep Dive</p>

                    <strong>Autor:</strong>
                    <p>Nigel Puldon</p>

                    <strong>Preco:</strong>
                    <p>R$ 47,90</p>

                    <strong>Data de publicação:</strong>
                    <p>28/07/2002</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>

                <li>
                    <strong>Título:</strong>
                    <p>Docker Deep Dive</p>

                    <strong>Autor:</strong>
                    <p>Nigel Puldon</p>

                    <strong>Preco:</strong>
                    <p>R$ 47,90</p>

                    <strong>Data de publicação:</strong>
                    <p>28/07/2002</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>

                <li>
                    <strong>Título:</strong>
                    <p>Docker Deep Dive</p>

                    <strong>Autor:</strong>
                    <p>Nigel Puldon</p>

                    <strong>Preco:</strong>
                    <p>R$ 47,90</p>

                    <strong>Data de publicação:</strong>
                    <p>28/07/2002</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>

                <li>
                    <strong>Título:</strong>
                    <p>Docker Deep Dive</p>

                    <strong>Autor:</strong>
                    <p>Nigel Puldon</p>

                    <strong>Preco:</strong>
                    <p>R$ 47,90</p>

                    <strong>Data de publicação:</strong>
                    <p>28/07/2002</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5"/>
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5"/>
                    </button>
                </li>
            </ul>
       </div>
    );
}