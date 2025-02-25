import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './Root.jsx';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<Root />);