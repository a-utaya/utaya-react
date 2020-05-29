import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`);
  return result;
}

const App = () => {
  const languages = ['React', 'Vue', 'Angular', 'Flutter'];
  return (
    <BrowserRouter>
      <div className='page'>
        <h1 className='title'>App Books</h1>
        <div className='book_kinds'>
          <div className='book_kind'>
            <Link to='/'>
              <img className='logo' src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
              <p>React</p>
            </Link>
          </div>
          <div className='book_kind'>
            <Link to='/vue'>
              <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' />
              <p>Vue</p>
            </Link>
          </div>
          <div className='book_kind'>
            <Link to='/angular'>
              <img className='logo' src='https://i1.wp.com/pronama.jp/wp-content/uploads/2017/02/angular.png?fit=800%2C800&ssl=1' />
              <p>Angular</p>
            </Link>
          </div>
          <div className='book_kind'>
            <Link to='/flutter'>
              <img className='logo' src='https://lh3.googleusercontent.com/OQicdb5sirirCCTLq2Z1J4tR_lU1DuYi7NMlaGvYBIYoi9jUuhI2Li4U_P3PDB1C4VcKtCLIoxyZX6EWPqeSfAgire5ktt0=s520-c' />
              <p>Flutter</p>
            </Link>
          </div>
        </div>
        <hr />
        <Route
          exact path='/'
          render={
            props =>
              <Booklist
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}
              />}
        />
        <Route
          path='/vue'
          render={
            props =>
              <Booklist
                language={languages[1]}
                getData={keyword => getDataFromAPI(keyword)}
              />}
        />
        <Route
          path='/angular'
          render={
            props =>
              <Booklist
                language={languages[2]}
                getData={keyword => getDataFromAPI(keyword)}
              />}
        />
        <Route
          exact path='/flutter'
          render={
            props =>
              <Booklist
                language={languages[3]}
                getData={keyword => getDataFromAPI(keyword)}
              />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
