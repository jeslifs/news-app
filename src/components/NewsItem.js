/* eslint-disable jsx-a11y/anchor-is-valid */
// rce
import React, { Component } from 'react'

export class NewsItem extends Component {
    // constructor(){
    //     super();
    //     console.log('Hello This is a constructor.')
    // }
  render() {
    // to customize thwe title and description using props
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/newsdetail/" className="btn btn-primary btn-sm">Read More</a>
                </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
