import logo from './logo.svg';
import './App.css';
import Quiz from './componets/Quiz';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
     {/* <h1> heading</h1> */}
     <ChakraProvider>
     <Quiz/>

     </ChakraProvider>
    </div>
  );
}

export default App;
