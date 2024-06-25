import './App.css';
import Form from './components/Form';
import Button from './components/Button';
import Header from './components/HEADER';


function App() {
const name='brad'
  return (
    <div className="App">
       <h1> Hello.. </h1>
       <h2>{name}</h2>
       <Header title="h1"/>
       <Button color="green" text="hello"/>
       <Form/>

    </div>
  )
}

export default App;
