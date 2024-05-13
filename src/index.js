import './style.css';
import './images/checkmark.png';
import { setDOMEvents, updateSidebar } from './otherJS/DOM';
import { projectList } from './otherJS/default';

setDOMEvents();
updateSidebar(projectList);