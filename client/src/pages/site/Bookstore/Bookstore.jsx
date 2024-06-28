import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Bookstore.scss';
import MainContext from '../../../context/context';
import { Link } from "react-router-dom";

const Bookstore = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { addToBasket}=useContext(MainContext)

    useEffect(() => {
        axios.get('http://localhost:4500/api/books/')
            .then(response => {
                setBooks(response.data);
                setFilteredBooks(response.data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredBooks(books);
        } else {
            const filtered = books.filter(book => book.categories === selectedCategory);
            setFilteredBooks(filtered);
        }
    }, [selectedCategory, books]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <section className='bookstore'>
            <div className="container">
                <div className="bookstore_header">
                    <h3 data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos="zoom-in">Our</h3>
                    <h1 data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos="zoom-in">BOOKSTORE</h1>
                </div>
                <div className="filter_books">
                    <div className="filter">
                        <h2>Filter by</h2>
                        <ul>
                            <li onClick={() => handleCategoryChange('All')}>All</li>
                            <li onClick={() => handleCategoryChange('Novels')}>
                            <input
                                    type="checkbox"
                                    checked={selectedCategory == 'novels'}
                                    onChange={() => handleCategoryChange('novels')}
                                />
                                Novels
                               
                            </li>
                            <li onClick={() => handleCategoryChange('lifeStyle')}>
                            <input
                                    type="checkbox"
                                    checked={selectedCategory == 'lifeStyle'}
                                    onChange={() => handleCategoryChange('lifeStyle')}
                                />
                            life Style
                                
                            </li>
                            <li onClick={() => handleCategoryChange('design')}>
                            <input
                                    type="checkbox"
                                    checked={selectedCategory == 'design'}
                                    onChange={() => handleCategoryChange('design')}
                                />
                            Design et art
                               
                            </li>
                            <li onClick={() => handleCategoryChange('month')}>
                            <input
                                    type="checkbox"
                                    checked={selectedCategory == 'month'}
                                    onChange={() => handleCategoryChange('month')}
                                />
                            Our books of <br /> the month
                                
                            </li>
                            <li onClick={() => handleCategoryChange('best')}>
                            <input
                                    type="checkbox"
                                    checked={selectedCategory == 'best'}
                                    onChange={() => handleCategoryChange('best')}
                                />
                            Bestsellers
                                
                            </li>
                            <li onClick={() => handleCategoryChange('travel')}>
                            <input
                                    type="checkbox"
                                    checked={selectedCategory == 'travel'}
                                    onChange={() => handleCategoryChange('travel')}
                                />
                            Travel guides
                                
                            </li>
                        </ul>
                    </div>
                    <div className="books">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((item) => (
                                <div className="book-card" key={item._id} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                    <div className="best-sale">Best Sale</div>
                                    <Link to={`/detail/${item._id}`}><div className="overlay">Quick View</div></Link>
                                    <img src={`http://localhost:4500/public/images/${item.image}`} alt={item.title} />
                                    <div className="info">
                                        <h3>{item.author}</h3>
                                        <p>${item.price}</p>
                                        <button onClick={() => addToBasket(item)} className="add-to-cart">Add to Cart</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-books-message">No books found in the selected category.</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bookstore;
