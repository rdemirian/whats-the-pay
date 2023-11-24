import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Stack, ChakraProvider } from '@chakra-ui/react';
import { SearchBar } from './components/searchbar';
import { SearchButton } from './components/searchbutton';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <h1>What's the pay?</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Stack direction={'row'} align={'center'}>
          <SearchBar/>
          <SearchButton/>
        </Stack>
      </header>
      <body>
      </body>
    </div>
    </ChakraProvider>
  );
}

export default App;
