import { addQuote, removeQuote } from "../actions/quotes";
import { quot } from "prelude-ls";

let selectedQuote
let updatedSelectedQuote
let index

export default (state = [], action) => {
  switch (action.type) {
  case 'ADD_QUOTE':
      const quote = {...action.quote, votes: 0}
      return [...state, quote]
  case 'REMOVE_QUOTE':
      const filteredQuotes = [...state.filter(quote => quote.id !== action.quoteId)]
      return filteredQuotes
  case 'UPVOTE_QUOTE':
    selectedQuote = state.find(quote => quote.id === action.quoteId)
    updatedSelectedQuote = {...selectedQuote, votes: (selectedQuote.votes + 1)}
    index = state.indexOf(selectedQuote)
      return [...state.slice(0, index), updatedSelectedQuote, ...state.slice(index+1)]
  case 'DOWNVOTE_QUOTE':
    selectedQuote = state.find(quote => quote.id === action.quoteId)
    updatedSelectedQuote = {...selectedQuote, votes: (selectedQuote.votes > 0 ? selectedQuote.votes + 1 : selectedQuote.votes)}
    index = state.indexOf(selectedQuote)
      return [...state.slice(0, index), updatedSelectedQuote, ...state.slice(index+1)]
  default:
    return state;
}
}
