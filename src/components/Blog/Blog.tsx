import React from 'react';
import { BlogItem } from '../../types';

const Blog: React.FC = () => {
  const blogPosts: BlogItem[] = [
    {
      title: 'Cybersecurity Essentials Protecting Business from Emerging Threats',
      description: 'Highlights clear problem-solution-result narrative, demonstrating agency\'s ability to provide.',
      image: `${process.env.PUBLIC_URL}/static/images/blog1.jpg`,
      category: 'IT Consulting',
      date: '16 April 2025',
      link: '#blog'
    },
    {
      title: 'The Ultimate Guide to Choosing the Right IT Solutions Partner',
      description: 'Highlights clear problem-solution-result narrative, demonstrating agency\'s ability to provide.',
      image: `${process.env.PUBLIC_URL}/static/images/blog2.jpg`,
      category: 'Business Continuity',
      date: '29 May 2025',
      link: '#blog'
    },
    {
      title: 'The Importance of Data Backup and Disaster Recovery Plans',
      description: 'Highlights clear problem-solution-result narrative, demonstrating agency\'s ability to provide.',
      image: `${process.env.PUBLIC_URL}/static/images/blog3.jpg`,
      category: 'Cloud Computing',
      date: '29 May 2025',
      link: '#blog'
    }
  ];

  const handleBlogClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="blog-area pt-130 rpt-100 pb-100 rpb-70 rel z-1" id="blog">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div 
              className="section-title text-center mb-50" 
              data-aos="fade-up" 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <span className="sub-title color-primary mb-10">Media & News</span>
              <h2>Latest Insight & Articles</h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="col-xl-4 col-md-6" 
              data-aos="fade-up" 
              data-aos-delay="200" 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <div className="blog-item hover-content">
                <div className="image">
                  <img 
                    decoding="async" 
                    src={post.image} 
                    alt={post.title} 
                    title={post.title} 
                  />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <a href={post.link} onClick={(e) => handleBlogClick(post.link, e)}>
                        {post.category}
                      </a>
                    </li>
                    <li>
                      <a href={post.link} onClick={(e) => handleBlogClick(post.link, e)}>
                        {post.date}
                      </a>
                    </li>
                  </ul>
                  <h4 className="title">
                    <a href={post.link} onClick={(e) => handleBlogClick(post.link, e)}>
                      {post.title}
                    </a>
                  </h4>
                  <div className="inner-content">
                    <p>{post.description}</p>
                    <a 
                      className="theme-btn btn-small" 
                      href={post.link}
                      onClick={(e) => handleBlogClick(post.link, e)}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;