/* eslint-disable jsx-a11y/anchor-is-valid */
// rce
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    // to customize thwe title and description using props
    let {title, description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
