import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <>
        <div className="container my-4">
            <div className="header">
                <h1>Top News of News Monkey</h1>
            </div>
            <div className="row my-3">
            <div className="newsItems col-md-4">
                <NewsItem/>
            </div>
            <div className="newsItems col-md-4">
                <NewsItem/>
            </div>
            <div className="newsItems col-md-4">
                <NewsItem/>
            </div>
            </div>
        </div>
      </>
    )
  }
}

export default News
