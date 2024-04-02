import React, { Component } from "react";
import NewsItem from "./newsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class NewsComponent extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
  }
  static propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1
    };
  }
  
  async updateNews(){
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab1fb995dc2343f9acc513b93e1ecf22&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false,
    });

  }

  async componentDidMount() {
    this.updateNews()
    // this.setState({ loading: true });
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab1fb995dc2343f9acc513b93e1ecf22&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResult: parsedData.totalResults,
    //   loading: false,
    // });
  }

  handleNextclick = async () => {
    // this.setState({ loading: true });
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab1fb995dc2343f9acc513b93e1ecf22&page=${
    //   this.state.page + 1
    // }&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    this.setState({page: this.state.page +1},()=>{

      this.updateNews()
    })
  };
  
  handlePrevclick = async () => {
    this.setState({page: this.state.page-1},()=>{
      this.updateNews()
    })
    // this.setState({ loading: true });
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab1fb995dc2343f9acc513b93e1ecf22&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">This my news application</h1>
        {this.state.loading && <Spinner/>}
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
        <div className="container d-flex justify-content-between">
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
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
