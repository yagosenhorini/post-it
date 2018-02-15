import React from 'react';

// props param
// function FormInput(props, children) {
//     return React.createElement('input', props, children);
    // let formInput = document.createElement('input');
    
    // // destructuring
    // formInput.setAttribute('class', props.className);
    // formInput.setAttribute('type', props.type);
    // formInput.setAttribute('name', props.name);
    // formInput.setAttribute('value', props.value);
    // formInput.setAttribute('placeholder', props.placeholder);

    // // qualquer valor é true
    // if (props.readonly) {
    //     formInput.setAttribute('readonly', true);
    // }
    
    // return formInput;
// }

export default props => React.createElement('input', props)