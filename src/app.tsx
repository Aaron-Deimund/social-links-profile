import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css'

// Semantic Components
import ReactHeader from './components/semantic/ReactHeader'
import ReactMain from './components/semantic/ReactMain';
import ReactFooter from './components/semantic/ReactFooter';

createRoot(document.querySelector("body")!).render(
  <StrictMode>
	<ReactHeader />
    <ReactMain />
	<ReactFooter />
  </StrictMode>,
)
