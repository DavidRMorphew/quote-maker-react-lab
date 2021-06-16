import { addQuote, removeQuote } from "../actions/quotes";
import { quot } from "prelude-ls";

export default (state = [], action) => {
  switch (action.type) {
  case 'ADD_QUOTE':
      const quote = {...action.quote, votes: 0}
      return [...state, quote]
  case 'REMOVE_QUOTE':
      const filteredQuotes = [...state.filter(quote => quote.id !== action.quoteId)]
      return filteredQuotes
  case 'UPVOTE_QUOTE':
      const selectedQuote = state.find(quote => quote.id === action.quoteId)
      const updatedSelectedQuote = {...selectedQuote, votes: (selectedQuote.votes + 1)}
      const index = state.indexOf(selectedQuote)
      return [...state.slice(0, index), updatedSelectedQuote, ...state.slice(index+1)]
  default:
    return state;
}
}
