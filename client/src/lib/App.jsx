/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import axios from 'axios';
import {Container, Button, Jumbotron} from 'react-bootstrap';
import QuestionList from '../components/QuestionList.jsx';
import SearchBar from '../components/SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qList: [],
      // searchInput: '',
    };
    this.getProductQs = this.getProductQs.bind(this);
    this.isHelpfulQ = this.isHelpfulQ.bind(this);
    this.isHelpfulA = this.isHelpfulA.bind(this);
    // this.searchHandler = this.searchHandler.bind(this);
  }
  componentDidMount() {
    this.getProductQs();
  };

  getProductQs() {
    // const id = Math.floor(Math.random() * 1000);
    const id = 6;
    axios.get(`http://52.26.193.201:3000/qa/${id}`)
        .then((res) => {
          this.setState({
            qList: res.data.results,
          }, () => console.log('getProductQs qList:', this.state.qList));
        })
        .catch((err) => console.error(err));
  }

  isHelpfulQ(questID) {
    axios.put(`http://52.26.193.201:3000/qa/question/${questID}/helpful`)
        .then((res) => {
          this.setState({});
        })
        .catch((err) => console.error(err));
    console.log('questionID:', questID);
  }

  isHelpfulA(answerID) {
    axios.put(`http://52.26.193.201:3000/qa/answer/${answerID}/helpful`)
        .then((res) => {
          this.setState({});
        })
        .catch((err) => console.error(err));
    console.log('answerID:', answerID);
  }

  reportAnswer(answerID) {
    // pass to individual answer (isHelpfulA)
    console.log('reportANSW:', answerID);
  }

  // TBD: app or use hooks for searchbar
  // searchHandler(e) {
  //   this.setState({searchInput: e.target.value.toLowerCase()});
  // // also set the state to searchInput === list item?
  // }
  // let questionSearcher = (question)=>question.question_body.toLowerCase().includes(this.state.searchInput.toLowerCase());
  // let filteredList = this.state.qList.filter(questionSearcher);
  // this.setState({qList: filteredList}

  render() {
    const {qList, searchInput} = this.state;
    return (
      <div id="body">
        <Container>
          <br></br>

          <div className="jumbotron">
            <h1 id="header">Questions and Answers</h1>
            <br></br>
            <SearchBar
              // searchInput={searchInput}
              // handleSearchChange={this.handleSearchChange}
              qList={qList}/>
            <div>
            </div>
            <br></br>
            <QuestionList
              qList={qList}
              isHelpfulQ={this.isHelpfulQ}
              isHelpfulA={this.isHelpfulA}
            />
          </div>
        </Container>
      </div>
    );
  };
};

export default App;
