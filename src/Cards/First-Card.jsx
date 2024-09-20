import React from 'react';
import './All-card.css';
import love from '../Images/brain.png'

const Blog = () => {
  const book = {
    title: 'Love On The Brain',
    author: 'Ali HazelWood',
    genre: 'Romance',
    publicationDate: '1925',
    coverImage: love,
    synopsis: 'From the New York Times bestselling author of The Love Hypothesis comes a new STEMinist rom-com in which a scientist is forced to work on a project with her nemesis—with explosive results.Bee Königswasser lives by a simple code: What would Marie Curie do? If NASA offered her the lead on a neuroengineering project - a literal dream come true - Marie would accept without hesitation. Duh. But the mother of modern physics never had to co-lead with Levi Ward.Sure, Levi is attractive in a tall, dark, and piercing-eyes kind of way. But Levi made his feelings toward Bee very clear in grad school - archenemies work best employed in their own galaxies far, far away.But when her equipment starts to go missing and the staff ignore her, Bee could swear she sees Levi softening into an ally, backing her plays, seconding her ideas... devouring her with those eyes. The possibilities have all her neurons firing.But when it comes time to actually make a move and put her heart on the line, theres only one question that matters: What will Bee Königswasser do?',
    review: 'An extraordinary exploration of the American Dream and a critique of wealth and privilege in the 1920s. Fitzgerald’s prose is both elegant and profound, capturing the spirit of an era.',
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

export default Blog;








/*import React from 'react';
import Matt from './Images/Matt.png';

function BlogLayout() {
  return (
  
    <main className="container">
  <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis position-relative"
    style={{
      background: 'linear-gradient(to bottom right, #003366, #003366)', // Midnight blue gradient
      color: 'white' // Ensure text is visible against the dark background
    }}
  >
    <div className="col-lg-6 px-0">
      <h1 className="display-9 fst-italic ">Review of "The Midnight Library" by Matt Haig</h1>
      <p className="lead my-3">
        In The Midnight Library, Matt Haig takes readers on a journey between life and death, exploring the choices that define us and the regrets that haunt us. The protagonist, Nora Seed, finds herself in a mysterious library
      </p>
      <p className="lead mb-0">
        <a href="#" className="text-body-emphasis fw-bold">Continue reading...</a>
      </p>
    </div>
  </div>



      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-body-secondary">Nov 12</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
              <h3 className="mb-0">Post title</h3>
              <div className="mb-1 text-body-secondary">Nov 11</div>
              <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>

          <article className="blog-post">
            <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
            <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>
            <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
            <hr />
            <p>This is some additional paragraph placeholder content...</p>
            <h2>Blockquotes</h2>
            <blockquote className="blockquote">
              <p>Quoted text goes here.</p>
            </blockquote>
          </article>

          <article className="blog-post">
            <h2 className="display-5 link-body-emphasis mb-1">Another blog post</h2>
            <p className="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>
            <blockquote>
              <p>Longer quote goes here, maybe with some <strong>emphasized text</strong>.</p>
            </blockquote>
            <p>This is some additional paragraph placeholder content...</p>
            <h3>Example table</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Upvotes</th>
                  <th>Downvotes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alice</td>
                  <td>10</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Bob</td>
                  <td>4</td>
                  <td>3</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Totals</td>
                  <td>14</td>
                  <td>14</td>
                </tr>
              </tfoot>
            </table>
          </article>

          <nav className="blog-pagination" aria-label="Pagination">
            <a className="btn btn-outline-primary rounded-pill" href="#">Older</a>
            <a className="btn btn-outline-secondary rounded-pill disabled" aria-disabled="true">Newer</a>
          </nav>
        </div>

        <div className="col-md-4">
          <div className="position-sticky" style={{ top: "2rem" }}>
            <div className="p-4 mb-3 bg-body-tertiary rounded">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">Customize this section to tell your visitors...</p>
            </div>

            <div>
              <h4 className="fst-italic">Recent posts</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="d-flex align-items-center py-3">Recent Post 1</a></li>
                <li><a href="#" className="d-flex align-items-center py-3">Recent Post 2</a></li>
              </ul>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Archives</h4>
              <ul className="list-unstyled mb-0">
                <li><a href="#">March 2021</a></li>
              </ul>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Elsewhere</h4>
              <ul className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogLayout;*/
