import React, { Component } from 'react'
import { Services } from '../../services/Services';
import {Header} from "../../heder/Header";
class BlogPage extends Component {
    constructor(props){
        super(props);
        this.state = ({menuStatus: false})
        this.handleMenu = this.handleMenu.bind(this)

    }
    services = ["UX/UI", "frontend", "backend", "flutter", "sql", "python"];

    handleMenu() {
        this.setState({menuStatus: !this.state.menuStatus})
    }

    render() {
        return (

            <>
                <h1> state = {console.log(this.state.menuStatus)} </h1>
                {this.state.menuStatus === true ? <Header/> : ""}

                <Services services={this.services} />

                <button onClick={this.handleMenu} >menu</button>
            </>
        )
    }
}
export  default BlogPage;