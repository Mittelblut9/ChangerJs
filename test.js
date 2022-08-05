import {
    getCJChanges
} from './lib/changer.js';

// window.addEventListener('onChanges', function (evt) {
//     const {
//         changes,
//         isDataChanged
//     } = evt.detail;

//     console.log('Changes:', changes);
//     console.log('Is Data Changed:', isDataChanged);
// });


document.querySelectorAll('.send').forEach(element => {
    element.addEventListener('click', function (el) {
        const {
            error,
            changes,
            isDataChanged
        } = getCJChanges(el);

        console.log('Changes:', changes);
        console.log('Is Data Changed:', isDataChanged);
        console.log('Error:', error);
    });

})