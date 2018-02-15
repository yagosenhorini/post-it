import React from 'react';

// // props param
// function FormTextarea(props, children) {

//     return React.createElement('textarea', props, children);
//     // let formTextarea = document.createElement('textarea');

//     // // destructuring
//     // formTextarea.setAttribute('class', props.className);
//     // formTextarea.setAttribute('name', props.name);
//     // formTextarea.setAttribute('rows', props.rows);
//     // formTextarea.setAttribute('placeholder', props.placeholder);

//     // // qualquer valor é true
//     // if (props.readonly) {
//     //     formTextarea.setAttribute('readonly', true);
//     // }
    
//     // formTextarea.innerHTML = props.children;

//     // return formTextarea;
// }

export default props => React.createElement('textarea', props)