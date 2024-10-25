// Home.js
import React from 'react';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to The Story Haven</h1>
          <p>Where stories come alive, one page at a time.</p>
          <button className="explore-btn">Explore Collections</button>
        </div>
      </header>

      <section className="about-store">
        <h2 >About The Story Haven</h2>
        <p style={{color:"black"}}>
          Nestled in the heart of the city, The Story Haven is more than just a
          bookstore—it's a sanctuary for readers and dreamers alike. Whether you're
          hunting for a beloved classic or discovering a new favorite, our shelves
          are brimming with worlds to explore.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </section>

      <section className="literary-highlights">
        <h2>Literary Highlights</h2>
        <p>
          From bestselling thrillers to hidden gems in poetry, our collection is
          thoughtfully curated for book lovers of every kind. Dive into our
          recommendations and find your next great read.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Home;
