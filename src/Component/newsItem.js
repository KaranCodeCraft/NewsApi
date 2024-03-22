import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title, content, imgUrl , url} = this.props
    return (
      <div className="my-3 mx-3">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={!imgUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/News24_Logo.jpg/225px-News24_Logo.jpg":imgUrl} alt="this" l />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {content}
            </p>
            <a href={url} target="_blank" className="btn btn-dark" rel="noreferrer">
              Read News
            </a>
          </div>
        </div>
      </div>
    );
  }
}
