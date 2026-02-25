import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import { HashRouter } from 'react-router';
import './assets/theme.scss';
import { PlayersProvider } from './context/PlayerContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <HashRouter> 
      <PlayersProvider>
      <App />
      </PlayersProvider>
    </HashRouter>

  </StrictMode>,
)
