import './style.css';
import './images/checkmark.png';
import { setDOMEvents, updateSidebar, updateContent } from './otherJS/DOM';
import { projectList, project1 } from './otherJS/default';

setDOMEvents();

updateSidebar(projectList);
updateContent(project1);