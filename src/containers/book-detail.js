import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    return(
      !this.props.book ?
        <div>Please select a book</div>
        :
        <div>
          <h3>Details for:</h3>
          <div>Title: {this.props.book.title}</div>
          <div>Pages: {this.props.book.pages}</div>
        </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
