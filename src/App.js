import React from 'react'
import ContactList from './components/ContactList'
import { Header } from './components/Header'
import Chat from './components/Chat'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => (

          <>
            <Header />
            <ContactList />
          </>
        )} />
        <Route exact path="/:user" component={Chat} />
      </Router>
    </div>
  );
}

export default App;
