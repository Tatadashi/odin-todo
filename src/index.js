import './style.css';
import { setDOMEvents } from './otherJS/DOM';
import { setAllModalEvents } from './otherJS/modalEvents';
import { setAllTabOnClickEvents, loadTabHtml } from './otherJS/tabEvents';
import { setAllTodoModalOpen } from './otherJS/modalTodoInfo';

setDOMEvents();
setAllTabOnClickEvents();
setAllModalEvents();

//load initial tab
loadTabHtml('todos');
setAllTodoModalOpen();