import React from "react"
import {AppCalendar} from './AppCalendar';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<AppCalendar tab="home" />);
