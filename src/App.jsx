import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

function App() {
  const queryClient = new QueryClient();
  
  return (
    <>
      <Header />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient} >
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
