import React from 'react'

export default function newsItem(props) {
  let { title, content, imgUrl, url, time, source} = props;
  return (

    <div className="my-3 mx-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={
              !imgUrl
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/News24_Logo.jpg/225px-News24_Logo.jpg"
                : imgUrl
            }
            alt="this"
            l
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          {source}
        </span>
          
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            
            <p className="card-text">{content}</p>
            <a
              href={url}
              target="_blank"
              className="btn btn-dark"
              rel="noreferrer"
            >
              Read News
            </a>
            <div className="card-footer text-muted my-2">{time}</div>
          </div>
        </div>
      </div>
  )
}
