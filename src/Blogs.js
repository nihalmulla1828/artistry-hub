import React from 'react';
import './Blogs.css'; // Import the CSS file for styling
import Footer from './Footer';
import Navbar from './Navbar';

const Blogs = () => {
  return (
    <>
    <div className="blogs-container">
      <h1 className="blogs-heading">Latest Blogs</h1>
      <div className="blogs-list">
        <div className="blog-card">
          <img src="https://via.placeholder.com/400x200" alt="Blog 1" className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-title">The Power of Creative Design</h3>
            <p className="blog-date">December 8, 2024</p>
            <p className="blog-description">
              Design is the foundation of every successful brand. In this blog, we explore how creativity can elevate your business...
            </p>
            <a href="/blog/1" className="read-more">Read More</a>
          </div>
        </div>

        <div className="blog-card">
          <img src="https://via.placeholder.com/400x200" alt="Blog 2" className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-title">Building a Strong Brand Identity</h3>
            <p className="blog-date">December 5, 2024</p>
            <p className="blog-description">
              A strong brand identity is key to standing out in a competitive market. In this blog, we discuss the elements of creating one...
            </p>
            <a href="/blog/2" className="read-more">Read More</a>
          </div>
        </div>

        <div className="blog-card">
          <img src="https://via.placeholder.com/400x200" alt="Blog 3" className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-title">How Freelance Designers Can Succeed</h3>
            <p className="blog-date">December 1, 2024</p>
            <p className="blog-description">
              Freelancing can be a rewarding career, but it requires focus, discipline, and effective marketing. Learn how to succeed as a freelance designer...
            </p>
            <a href="/blog/3" className="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blogs;
