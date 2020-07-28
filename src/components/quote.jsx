import React, { Component } from 'react'
import './quote.css'
class Quote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentQuote: {}
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick()
    }
    handleClick() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                this.setState({ currentQuote: data })
            })
    }
    render() {

        return (
            <div>
                <h1 id='header'>randomQuotes</h1>
                <div className='container'>
                    <p className='quote' >{this.state.currentQuote.content}</p>
                    <p id='author'>-{this.state.currentQuote.author}</p>
                </div>
                <button onClick={this.handleClick}>Next Quote</button>
            </div>
        );
    }
}

export default Quote;