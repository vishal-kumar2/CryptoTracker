import React from 'react';
import './Blog.css';
import blog1 from '..//..//assets/blog1.avif'
import blog2 from '..//..//assets/blog2.avif'
import blog3 from '..//..//assets/blog3.avif'

const blogPosts = [
  {
    title: 'Understanding Bitcoin Halving: Why It Matters',
    date: 'July 15, 2025',
    snippet: 'Bitcoin halving is a core part of its supply mechanism...',
    image: blog1,
    link: '#',
  },
  {
    title: 'Top 5 Altcoins to Watch in 2025',
    date: 'July 10, 2025',
    snippet: 'Here are the most promising altcoins...',
    image: blog2,
    link: '#',
  },
  {
    title: 'How to Secure Your Crypto Wallets',
    date: 'July 1, 2025',
    snippet: 'Avoid common security mistakes and protect your digital assets...',
    image: blog3,
    link: '#',
  },
];


const Blog = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-title">Latest from Our Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <div className="blog-post-title">{post.title}</div>
              <div className="blog-date">{post.date}</div>
              <div className="blog-snippet">{post.snippet}</div>
              <a href={post.link} className="blog-readmore">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
