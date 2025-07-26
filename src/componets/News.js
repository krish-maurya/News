import React, { Component } from 'react'
import Newsitem from './Newsitem'
import LoadingOverlay from './LoadingOverlay'
import '../App.css';

export default class News extends Component {
    static defaultProps = {
        category: 'general'
    }
    articals = []
    constructor() {
        super();
        this.state = {
            articals: this.articals,
            page: 1,
            pagesize: 10,
            loding: false
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=304e6a1cbf534f559523ff1e68d4defd&pagesize=${this.state.pagesize}&page=${this.state.page}`;
        this.setState({ loding: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata.articles);
        this.setState({ articals: parsedata.articles, totalResults: parsedata.totalResults, loding: false })
    }
    newsupdate = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=304e6a1cbf534f559523ff1e68d4defd&pagesize=${this.state.pagesize}&page=${this.state.page}`;
        this.setState({ loding: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata.articles);
        this.setState({ articals: parsedata.articles, loding: false })
    }
    previouspage = () => {
        console.log("previous");
        this.setState({ page: this.state.page - 1 })
        this.newsupdate();
    }
    nextpage = () => {
        console.log("next");
        this.setState({ page: this.state.page + 1 })
        this.newsupdate();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <div>
                <h1 className='my-3 container poppins-extrabold'>News Headlines</h1>
                <div className='container'>{this.state.loding && <LoadingOverlay />}</div>
                <div className='container'>
                    <div className='row'>
                        {this.state.articals.map((element) => {
                            return <div key={element.url} className='col-md-4 my-2'>
                                <Newsitem title={element.title ? element.title.slice(0, 93) : ""} description={element.description ? element.description.slice(0, 100) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://sportsfly.cbsistatic.com/fly-0929/bundles/sportsmediacss/images/fantasy/default-article-image-large.png"} url={element.url} />
                            </div>
                        })}

                    </div>
                    <div className='d-flex justify-content-between my-2'>
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previouspage}>&larr;Previous</button>
                        <button disabled={this.state.page > Math.ceil(this.state.totalResults / this.state.pagesize)} type="button" className="btn btn-dark" onClick={this.nextpage}>Next&rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
