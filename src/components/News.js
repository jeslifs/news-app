//rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    // articles = [
    //     {
    //     "source": {
    //     "id": "news24",
    //     "name": "News24"
    //     },
    //     "author": "Khanyiso Tshwaku",
    //     "title": "Door remains open for Faf, but fitness, T20 priorities a concern for Walter",
    //     "description": "Proteas white-ball coach Rob Walter said former limited-overs captain Faf du Plessis still has an open door to the national team, but will have to understand the different workload requirements needed for 50-Over cricket.",
    //     "url": "https://www.news24.com/sport/cricket/proteas/door-remains-open-for-faf-but-fitness-concerns-t20-priorities-linger-large-for-walter-20230510",
    //     "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/896/ad0e77efc0384e3aa9982398020f69fd.jpg",
    //     "publishedAt": "2023-05-10T19:06:27+00:00",
    //     "content": "<ul><li>Proteas white-ball coach Rob Walter said former limited-overs skipper Faf du Plessis remains a selection option even though there are certain considerations at play.</li><li>One of those is D… [+2853 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "espn-cric-info",
    //     "name": "ESPN Cric Info"
    //     },
    //     "author": null,
    //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //     "publishedAt": "2020-04-27T11:41:47Z",
    //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "espn-cric-info",
    //     "name": "ESPN Cric Info"
    //     },
    //     "author": null,
    //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //     "publishedAt": "2020-03-30T15:26:05Z",
    //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    //     ]
    constructor(){
        super();
        console.log('Hello This is a constructor from news component.');
        // this is a state
        this.state = {
            // article: this.articles,
            article: [],
            loading: false,
            // for page
            page: 1
        }
    }

    // componentDidMount
    async componentDidMount(){
      let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=d85b2a0c593e4db491a4b90e849263c3&pageSize=20';
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({article: parsedData.articles, totalResults: parsedData.totalResults});
    }


    // onchonge function.
    handleNextClick = async () =>{
      console.log('next');
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

      }
      else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d85b2a0c593e4db491a4b90e849263c3&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        // this.setState({article: parsedData.articles});
        //  put it in ine place


        this.setState({
          page: this.state.page + 1,
          article: parsedData.articles
        })
        }      
    }

    handlePrevClick = async () =>{
      console.log('pre');

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d85b2a0c593e4db491a4b90e849263c3&page=${this.state.page - 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      // this.setState({article: parsedData.articles});
      //  put it in ine place


      this.setState({
        page: this.state.page - 1,
        article: parsedData.articles
      })
    }


  render() {
    return (
      <div className='container my-3'>
        <h2>JSF - Top Headlines</h2>
        {/* {this.state.article.map((element)=>{console.log(element)})} */}
        <div className="row">
          {/* need to get the articles auto using iteration */}
            {/* <div className="col-md-4">
                <NewsItem title = 'myTitle' description ='Hello mf' imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" newsUrl='todo' />
            </div> */}
            {/* <div className="col-md-4">
                <NewsItem title='myTitle' description='Hello mf'/>
            </div>
            <div className="col-md-4">
                <NewsItem title='myTitle' description='Hello mf'/>
            </div> */}

            {this.state.article.map((element)=>{
              return (<div className="col-md-4" key={element.url}>
                      <NewsItem  title = {element.title?element.title.slice(0, 45):''} description = {element.description?element.description.slice(0, 88):''} imageUrl = {element.urlToImage} newsUrl={element.url} />
                      </div>)
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button type="button" className="btn btn-info" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
