import React, {Component} from 'react';
//glue between react and redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//function that the action that's generated flows through all the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList(){
    return this.props.books.map((book) => {
      return(
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

//first argument is state and returns an object. The glue between react and redux
function mapStateToProps(state) {
  //whatever is returned will show up as props inside of book list
  return {
    books: state.books
  };
}

//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called the result should be passed to all of our reducers
  return bindActionCreators( { selectBook: selectBook }, dispatch );
}

//takes a function and compoennt and creates a container
//promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
