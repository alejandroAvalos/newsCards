import React from "react";

const NewsItem = props => {
  const item = props.item;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><a href={item.url} className="p-link-title">{item.title}</a></h5>
        <p className="card-text">
          {item.description ? item.description : item.content}
        </p>
        <p className="card-text">
          <small className="text-muted">{item.publishedAt.slice(0, 10)}</small>
        </p>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="p-link">See more</a>
      </div>
    </div>
  );
};

export default NewsItem;
