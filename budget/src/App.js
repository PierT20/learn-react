import './App.css';
import { Container,  Grid,  Icon, Segment, } from 'semantic-ui-react'
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance title="Your Balance" value="2550" size='small'/>


      <MainHeader title="History" type="h3"/>

      <EntryLine description="income" value="$10"/>
      <EntryLine description="expense" value="$10"/>


      <MainHeader title="Add new transaction" type='h3'/>
      <NewEntryForm/>
    </Container>
  );
}

export default App;
