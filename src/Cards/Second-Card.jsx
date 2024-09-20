import React from 'react';
import './All-card.css';
import horror from '../Images/adam.png'

const Second = () => {
  const book = {
    title: 'They Both Die At The End',
    author: 'Adam Silvera',
    genre: 'Horror',
    publicationDate: '1925',
    coverImage: horror,
    synopsis: 'On September 5, a little after midnight, Death-Cast calls Mateo Torrez and Rufus Emeterio to give them some bad news: Theyre going to die today.Mateo and Rufus are total strangers, but, for different reasons, theyre both looking to make a new friend on their End Day. The good news: Theres an app for that. Its called the Last Friend, and through it, Rufus and Mateo are about to meet up for one last great adventure—to live a lifetime in a single day.Adam Silvera reminds us that theres no life without death and no love without loss in this devastating yet uplifting story about two people whose lives change over the course of one unforgettable day.,review: An extraordinary exploration of the American Dream and a critique of wealth and privilege in the 1920s. Fitzgerald’s prose is both elegant and profound, capturing the spirit of an era.',
    rating: 4.5,
  };

  return (
    <div className="review-container">
      <header className="review-header">
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Publication Date:</strong> {book.publicationDate}</p>
      </header>
      
      <div className="review-body">
        <img src={book.coverImage} alt={`${book.title} Cover`} className="book-cover" />
        <p><strong>Synopsis:</strong> {book.synopsis}</p>
        <p>{book.review}</p>
      </div>
      
      <footer className="review-footer">
        <p><strong>Rating:</strong> {book.rating} / 5</p>
        <a href="/related-books" className="related-books-link">See related books</a>
      </footer>
    </div>
  );
};

export default Second;

