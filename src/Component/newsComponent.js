import React, { Component } from "react";
import NewsItem from "./newsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class NewsComponent extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 0,
  };
  static propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    loading: PropTypes.bool,
  };

  capitalize = (params) => {
    return params[0].toUpperCase() + params.slice(1, params.length);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResult: 0,
      hasMore: true, 
    };
    this.handleInfiniteClick = this.handleInfiniteClick.bind(this);
  }

  handleInfiniteClick = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight &&
        !this.state.loading &&
        this.state.hasMore 
      ) {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab1fb995dc2343f9acc513b93e1ecf22&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        const newArticles = [...this.state.articles, ...parsedData.articles];
        this.setState((prevState) => ({
          articles: newArticles,
          totalResult: parsedData.totalResults,
          loading: false,
          page: prevState.page + 1,
          hasMore: newArticles.length < parsedData.totalResults 
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    window.addEventListener("scroll", this.handleInfiniteClick);
    this.updateNews();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleInfiniteClick);
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab1fb995dc2343f9acc513b93e1ecf22&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false,
      hasMore: parsedData.articles.length < parsedData.totalResults, 
    });
  }

  // handleNextclick = () => {
  //   this.setState({ page: this.state.page + 1 });
  //   updateNews()
  // };

  // handlePrevclick = () => {
  //   this.setState({ page: this.state.page - 1 });
  //   updateNews()
  // };

  render() {
    return (
      <>
        <h1 className="text-center">
          Top Headlines on - {this.capitalize(this.props.category)}
        </h1>
        {this.state.loading && <Spinner />}

        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
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
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevclick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page >=
                Math.ceil(this.state.totalResult / this.props.pageSize) ||
              !this.state.hasMore 
            }
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

