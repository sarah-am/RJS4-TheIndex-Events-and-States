import React, { Component } from "react";
class BookRow extends Component {
  render() {
    const author = this.props.author;
    const authorName = `${author.first_name} ${author.last_name}`;
    return (
      <tr>
        <td>{this.props.book.title}</td>
        <td>{authorName}</td>
        <td>
          <button
            className="btn"
            style={{ backgroundColor: this.props.book.color }}
          />
        </td>
      </tr>
    );
  }
}
export default BookRow;
