import './style.css';
import { setDOMEvents } from './otherJS/DOM';
import { setAllModalEvents } from './otherJS/modalEvents';
import { setAllTabOnClickEvents, loadTabHtml } from './otherJS/tabEvents';

setDOMEvents();
setAllTabOnClickEvents();
setAllModalEvents();

//load initial tab
loadTabHtml('todos');
