import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
class App extends Component {
  state = {
    currentAuthor: null,
    filteredAuthors: authors
  };

  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  methodUnknown = () => {
    if (this.state.currentAuthor !== null) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.filteredAuthors}
          selectAuthor={this.selectAuthor}
          filterAuthors={this.filterAuthors}
        />
      );
    }
  };

  unselectAuthor = () => {
    this.setState({ currentAuthor: null, filteredAuthors: authors });
  };

  filterAuthors = query => {
    const filteredlist = authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    this.setState({ filteredAuthors: filteredlist });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">{this.methodUnknown()}</div>
        </div>
      </div>
    );
  }
}

export default App;
