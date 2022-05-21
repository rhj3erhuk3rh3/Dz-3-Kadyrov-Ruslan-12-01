import React from "react";

export class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({news: false})
    }
    render() {
        return (
            <div>
                <h2>News</h2>
                <p>Держи дом в чистоте,как будто ждешь гостей! А сердце держи в чистоте,как будто ждешь смерть!</p>
                {this.state.news === true ? <News/> : ""}
            </div>
        )
    }
}