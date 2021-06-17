import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {addQuote, removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  renderQuotes = () => {
    const quotations = this.props.quotes
    return quotations.map(quotation => <div key={quotation.id}><QuoteCard quote={quotation} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/></div>)
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
              Quotes Container
              {this.renderQuotes()}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(({quotes}) => ({quotes}), {addQuote, removeQuote, upvoteQuote, downvoteQuote})(Quotes);
