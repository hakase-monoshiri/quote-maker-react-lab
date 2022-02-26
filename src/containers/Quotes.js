import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downvoteQuote, removeQuote, upvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  renderQuoteCards = () => {
    return this.props.quotes.map( (quote, id) => < QuoteCard key={id} quote={quote} delete={this.props.remove} downvote={this.props.downvote} upvote={this.props.upvote}/>)
  }

  render() {

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              {this.renderQuoteCards()}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  remove: removeQuote,
  downvote: downvoteQuote,
  upvote: upvoteQuote
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
