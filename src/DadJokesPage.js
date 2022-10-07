import React, { Fragment } from 'react'
// import React from 'react-dom'
// import { BrowserRouter as Router, Route, Link, Switch, Redirect, } from 'react-router-dom';
import { connect } from 'react-redux'
import $ from 'jquery'
import 'jquery/jquery.color'
import './index.css'
import './style.scss'
import {nextQuote, prevQuote} from './actions'


// list of colors for the background, text, and icons on the page
let colorList = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];

// rand integer used to select a random color
let randInt = Math.floor(Math.random() * Math.floor(colorList.length));

// function to update colors for the quote-section (which covers the whole page)
// the icons, and the text. Animate allows it to ease onto the page
function updateColor () {
    randInt = Math.floor(Math.random() * Math.floor(colorList.length));
      $('#quote-section').animate({
          backgroundColor: colorList[randInt],
          },1000
        );
      $('.quote-button').animate(
        { opacity: 0},
        500,
        function() {
            $(this).animate({ opacity: 1, backgroundColor: colorList[randInt] }, 250)
          }
      );
      $('.icon').animate(
        {opacity: 0},
        500,
        function() {
            $(this).animate({ opacity: 1, color: colorList[randInt]}, 500)
          }
      );
      $("#quote-text").animate(
        { opacity: 0, color: colorList[randInt] },
        500,
        function() {
          $(this).animate({ opacity: 1}, 500)
        });
      $("#quote-master").animate(
        { opacity: 0, color: colorList[randInt] },
        500,
        function() {
          $(this).animate({ opacity: 1}, 500)
        });
}

// call update color on the first page load
$(document).ready(function () {
    updateColor();
});


// To do:
// add quote functionality
// add a toggle to allow people to add their own quote
// add auto quote toggle
// 

// class that renders quotes onto the page
// using redux state and actions
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
        updateColor();
    }

    nextQuote() {
        this.props.nextQuote();
        updateColor();
    }

    render() {
        let tweet = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"'+ this.props.quote + '"' + this.props.quoteMaster);
        let tumblr = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(this.props.quoteMaster) + '&content=' + encodeURIComponent(this.props.quote) +'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';
        return (
            <section id="quote-section">
                <div className="container h-100">
                    
                    <div className="row h-100 justify-content-center align-items-center pl-5 pr-5">
                    <div id="quote-welcome" className="row justify-content-center text-center"> A simple random quote machine. The icons allow you to share the wisdom! </div>
                        <div className="row w-100">
                            <div className="col text-center">
                                <div id="quote-block" className="ml-auto mr-auto">

                                    <div id="quote-text"><span className="fas fa-quote-left icon"></span> {this.props.quote}</div>
                                    <div className="d-flex justify-content-end p-3">
                                        <div id="quote-master" className="mt-3">- {this.props.quoteMaster} </div>
                                    </div>
                                    <div className="mt-4 d-flex align-items-center flex-wrap">
                                        <div className="col-12 col-sm-6">
                                            <div className="d-flex justify-content-start">
                                                <a href={tweet}><i className="btn fab fa-twitter-square icon"></i></a><div className="btn btn-default pull-left">
                                                <a href={tumblr}><i className="ml-2 fab fa-tumblr-square icon"></i></a></div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <button id="prev-quote" className="btn btn-primary quote-button" onClick={this.prevQuote}>Prev</button>
                                                <button id="next-quote" className="btn btn-primary quote-button" onClick={this.nextQuote}>Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            by Ife Lawal.
                           
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

// built in redux function to provide redux state as props to the react class
const mapStateToProps = (state) => {
        const index = state.quotesReducerNew.counter;
        return {
            quote: state.quotesReducerNew.quotes[index].quote,
            quoteMaster: state.quotesReducerNew.quotes[index].author,
            counter: state.quotesReducerNew.counter
        }
}

// built in redux function to provide redux actions as functions to the react class
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