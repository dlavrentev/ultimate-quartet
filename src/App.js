import './Style.css';
import Card from './Components/Card';
import Animal from './Data/Animal';

function App() {

  const animal = new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40);

  return (
    <div className="App">
      <h1>Ultimate Quartet</h1>
      <Card animal={animal} uncovered />
    </div>
  );
}

export default App;
