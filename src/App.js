import './App.css';
import Mensaje from './Mensaje.js';

const Description = () => 
{
  return <p>BootCamp</p>
}


function App() {
  return (
    <div className="App">
      <Mensaje color='red'message='Prueba de react' /> 
      <Description />

    </div>
  );
}

export default App;
