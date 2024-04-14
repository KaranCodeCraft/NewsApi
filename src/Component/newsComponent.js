import NewsItem from "./newsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

import React, {useEffect, useState} from 'react'

export default function NewsComponent(props) {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResult, settotalResult] = useState(0)
  const [hasMore, sethasMore] = useState(true)
  
  const capitalize = (params) => {
    return params[0].toUpperCase() + params.slice(1, params.length);
  };

  const handleInfiniteClick = async (event) => {
    event.preventDefault(); // Prevent default behavior of the scroll event
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
        !loading &&
        hasMore
      ) {
        setloading(true);
        const nextPage = page + 1;
        setpage(nextPage);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        const newArticles = [...articles, ...parsedData.articles];
        setarticles(newArticles);
        settotalResult(parsedData.totalResults);
        setloading(false);
        sethasMore(newArticles.length < parsedData.totalResults);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const  updateNews = async()=> {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
      setarticles(parsedData.articles)
      settotalResult(parsedData.totalResults)
      setloading(false)
      props.setProgress(100)
      sethasMore(parsedData.articles.length< parsedData.totalResults)
  }

  useEffect(() => {
    updateNews();
  }, [])

  useEffect(()=>{
    window.addEventListener('scroll', handleInfiniteClick);
    return ()=> window.removeEventListener('scroll',handleInfiniteClick)
  },[loading, hasMore])
  
  return (
      <>
        <h1 className="text-center" style={{marginTop: "70px"}}>
          Top Headlines on - {capitalize(props.category)}
        </h1>
        {loading && <Spinner />}

        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.title}>
                  <NewsItem
                    title={element.title}
                    content={element.content}
                    imgUrl={element.urlToImage}
                    url={element.url}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
      )
    }

    NewsComponent.defaultProps = {
      country: "in",
      pageSize: 0,
    };

    NewsComponent.propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.string,
      loading: PropTypes.bool,
    };
