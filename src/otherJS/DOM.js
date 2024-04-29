import {setAllTabOnClickEvents} from './tabEvents';
import {setAllModalEvents} from './modalEvents';

function setDOMEvents () {
    setAllTabOnClickEvents();
    setAllModalEvents();
}

export {setDOMEvents};