import React from 'react';
import { App } from './components/App.js';

import './components/App.scss';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);