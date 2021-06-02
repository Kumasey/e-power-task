import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const BlogDetails = (props) => {
  const [detail, setDetail] = useState({
    title: { rendered: ' ' },
    excerpt: { rendered: ' ' },
  });
  const id = props.match.params.id;
  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://blog.epower.ng/wp-json/wp/v2/posts/${id}`;
        const { data } = await axios.get(url);
        console.log('-------->', data);
        setDetail(data);
        console.log('-->', data);
        console.log('---------------->', detail);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, [id]);
  return (
    <>
      <h1>Blog Details </h1>
      <div className="img-cont">
        <img src={detail.featured_image} alt="" />
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
        <img src={detail.featured_image} alt="" />
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
          dangerouslySetInnerHTML={{ __html: detail.excerpt.rendered }}
        />{' '}
        <br />
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
