import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import '../../src/Blog.css';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const BlogDetails = (props) => {
  const [detail, setDetail] = useState({
    title: { rendered: ' ' },
    excerpt: { rendered: ' ' },
    post_author: { name: ' ' },
  });
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;
  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://blog.epower.ng/wp-json/wp/v2/posts/${id}`;
        const { data } = await axios.get(url);
        setLoading(false);
        setDetail(data);
        console.log('-->', data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, [id]);
  return (
    <div className="loading">
      <h1>
        Blog Details <br />
        <span>
          <Link to={'/'}>...BACK </Link>
        </span>
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="container-div">
          <div className="img-cont">
            <img src={detail.featured_image} alt="" />
          </div>
          <h5>{detail.title.rendered}</h5>
          <br />
          <h2
            dangerouslySetInnerHTML={{ __html: detail.excerpt.rendered }}
          />{' '}
          <br />
          <div
            dangerouslySetInnerHTML={{ __html: detail.excerpt.rendered }}
          />{' '}
          <br />
          <div
            dangerouslySetInnerHTML={{ __html: detail.excerpt.rendered }}
          />{' '}
          <br />
          <img src={detail.featured_image_thumbnail} alt="" />
          <div
            dangerouslySetInnerHTML={{ __html: detail.excerpt.rendered }}
          />{' '}
          <br />
          <div
            dangerouslySetInnerHTML={{ __html: detail.excerpt.rendered }}
          />{' '}
          <br />
          <div
            dangerouslySetInnerHTML={{ __html: detail.excerpt.rendered }}
          />{' '}
          <br />
          <div
            dangerouslySetInnerHTML={{ __html: detail.excerpt.rendered }}
          />{' '}
          <br />
          <div
            dangerouslySetInnerHTML={{ __html: detail.excerpt.rendered }}
          />{' '}
          <br />
          <h2
            dangerouslySetInnerHTML={{ __html: detail.post_author.name }}
          />{' '}
          <div className="avatar">
            <img src={detail.post_author.avatar} alt="" />
          </div>
          <br />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BlogDetails;
