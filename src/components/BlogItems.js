import React from 'react';
import '../../src/Item.css';

const BlogItems = ({ item }) => {
  return (
    <>
      <div>
        <img src={item.featured_image} alt="" />
        <div className="items">
          <p>
            TITLE: <br />
            {item.title.rendered}
          </p>
          <div>
            {' '}
            EXCERPT: <br />
            <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItems;
