import { AppProvider } from './context/appProvider';
import { Layout } from './layout/Layout';

function App() {
  return (
    <AppProvider>
      <Layout/>
    </AppProvider>
  );
}

export default App;
