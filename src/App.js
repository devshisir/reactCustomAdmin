import { Suspense } from 'react';
import Routes from './routes/AppRouter';


function App() {
  return (
    <Suspense>
      <Routes />
    </Suspense>
  );
}



export default App;
