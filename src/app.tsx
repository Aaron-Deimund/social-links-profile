import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css'

// Semantic Components
import ReactHeader from './components/semantic/ReactHeader.tsx'
import ReactMain from './components/semantic/ReactMain.tsx';
import ReactFooter from './components/semantic/ReactFooter.tsx';

createRoot(document.querySelector("body")!).render(
  <StrictMode>
	<ReactHeader />
    <ReactMain />
	<ReactFooter />
  </StrictMode>,
)
