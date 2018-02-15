import React from 'react';

// let props={
//     className: 'note__control',
//     type: 'button',
//     onClick: ()=>{

//     }
// }

// props param
// function FormButton(props, children) {

//     return React.createElement('button', props, children)
    // let formButton = document.createElement('button');
    
    // // destructuring
    // formButton.setAttribute('class', props.className);
    // formButton.setAttribute('type', props.type);
    
    // formButton.addEventListener('click', props.click);

    // formButton.innerHTML = props.children;

    // return formButton;
// }

export default (props) => React.createElement('button', props)