import React, {Component} from "react";
import {News} from "../../NewsPage/News";


export class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state = {news: false}
        this.euroNews = this.euroNews.bind(this)
    }

    euroNews(){
        this.setState({news: !this.state.news})
    }

    render() {
        return(
            <div>
                <h2>MainPage</h2>
                {this.state.news === true ? <News/> : ""}
                <button onClick={this.euroNews} >click</button>
            </div>

        )
    }
}