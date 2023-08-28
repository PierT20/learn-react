import './App.css';
import React, { useState } from 'react';

import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import EntryLine from './components/EntryLine';

function App() {
  const [entries, setEntries] = useState(initialEntries)
  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance title="Your Balance" value="2550" size='small'/>


      <MainHeader title="History" type="h3"/>
      {entries.map((entry =>(
        <EntryLine description={
          entry.description} 
          value={entry.value} 
          isExpense={entry.isExpense}
        />
        )))}
      


      <MainHeader title="Add new transaction" type='h3'/>
      <NewEntryForm/>
    </Container>
  );
}

export default App;

var initialEntries= [
  {
    description:"Work income",
    value:"$1000",
    isExpense:false
  },
  {
    description:"Water Bill",
    value:"$20",
    isExpense:true
  },
  {
    description:"Bill income",
    value:"$300",
    isExpense:true
  },
  {
    description:"Power Bill",
    value:"$50",
    isExpense:true
  },
]