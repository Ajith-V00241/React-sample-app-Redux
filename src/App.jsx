import React from 'react';
import './App.css';
import Books from './components/Books/Books'
import Book from './components/Book/Book'
import AddBook from './components/AddBook/AddBook'
import EditBook from './components/EditBook/EditBook'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Books}/>
            <Route exact path="/books/new" component={AddBook}/> 
            <Route exact path="/books/:id" component={Book}/>
            <Route exact path="/books/:id/edit" component={EditBook} />
          </Switch>
        </Router> 
    </div>
  );
}

export default App;
