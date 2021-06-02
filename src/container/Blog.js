import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../src/Blog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogItems from '../components/BlogItems';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const [blog, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const getBlogPost = async () => {
      setLoading(true);
      try {
        const url = `https://blog.epower.ng/wp-json/wp/v2/posts?page=${pageNumber}&per_page=6`;
        const { data } = await axios.get(url);
        console.log('=====>', data);
        setBlogs([...data]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogPost();
  }, [pageNumber]);
  const handlePrevious = () => {
    if (pageNumber >= 2) {
      setPageNumber(pageNumber - 1);
    }
    return;
  };
  const handleNext = () => {
    setPageNumber(pageNumber + 1);
    return;
  };
  return (
    <div>
      <Header />
      <h3>Page {pageNumber}</h3>
      <div className="loading">
        {loading ? (
          <Loading />
        ) : (
          <div className="blog-cont">
            {blog.map((blogs) => (
              <Link to={`/${blogs.id}/${blogs.slug}`} key={blogs.id}>
                <BlogItems item={blogs} key={blogs.id} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="pagination">
        <button
          className="previous"
          type="button"
          onClick={handlePrevious}
          disabled={pageNumber === 1 ? true : false}
        >
          Previous
        </button>
        <button className="next" type="button" onClick={handleNext}>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
