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
            <img src={!imageUrl?'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1bDdZB.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg':imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
