import React, { Fragment } from 'react'
// import React from 'react-dom'
// import { BrowserRouter as Router, Route, Link, Switch, Redirect, } from 'react-router-dom';
import { connect } from 'react-redux'
import $ from 'jquery'
import './index.css'
import './style.scss'
import {nextQuote, prevQuote} from './actions'

$(document).ready(function () {
    let colorList = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
    let randInt = Math.floor(Math.random() * Math.floor(colorList.length));
    $('#quote-section').css("background-color",colorList[randInt]);
    $('#new-quote-button').css("background-color",colorList[randInt]);
    $('.icon').css("color",colorList[randInt]);
    $(".quote-button").css("background-color", colorList[randInt]);
});


// To do:
// add quote functionality
// add a toggle to allow people to add their own quote
// add auto quote toggle
// 
class DadJokesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCanAddQuote: false,
        }

        this.nextQuote = this.nextQuote.bind(this);
        this.prevQuote = this.prevQuote.bind(this);
    }

    prevQuote() {
        this.props.prevQuote();
    }

    nextQuote() {
        this.props.nextQuote();
    }

    render() {
        let tweet = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"'+ this.props.quote + '"' + this.props.quoteMaster);
        let tumblr = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent('"' + this.props.quote + '"' + this.props.quoteMaster);
        return (
            <section id="quote-section">
                <div className="container h-100">
                    
                    <div className="row h-100 justify-content-center align-items-center">
                    <div className="row justify-content-center"> This will soon have dad jokes but for now here is a quote:</div>
                        <div className="row">
                            <div className="col text-center">
                                <div id="quote-block" className="ml-auto mr-auto ">

                                    <div className=""><span className="fas fa-quote-left icon"></span> {this.props.quote}</div>
                                    <div className="d-flex justify-content-end p-3">
                                        <div id="quote-master" className="mt-3">- {this.props.quoteMaster} </div>
                                    </div>
                                    <div className="mt-4 d-flex align-items-center flex-wrap">
                                        <div className="col-12 col-sm-6">
                                            <div className="d-flex justify-content-start">
                                                <a href={tweet}><i className="fab fa-twitter-square icon"></i></a>
                                                <a href={tumblr}><i className="ml-2 fab fa-tumblr-square icon"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="d-flex justify-content-end">
                                                <button className="btn btn-primary quote-button" onClick={this.prevQuote}>Prev</button>
                                                <button className="btn btn-primary quote-button" onClick={this.nextQuote}>Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            by Ife Lawal. New Auto quote in 
                           
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
        const index = state.quotesReducerNew.counter;
        return {
            quote: state.quotesReducerNew.quotes[index].quote,
            quoteMaster: state.quotesReducerNew.quotes[index].quoteMaster,
            counter: state.quotesReducerNew.counter
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextQuote: () => {
            dispatch(nextQuote());
        },
        prevQuote: () => {
            dispatch(prevQuote());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DadJokesPage);