import Form from './form.js';
import React from 'react'
import FormInput from './formInput.js'
import FormTextarea from './formTextarea.js'
import FormButton from './formButton.js'
import Nota from '../nota.js'



function criaInput(novaNota){

 const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readOnly: !novaNota.editando,
        defaultValue: novaNota.titulo,
        onChange: event =>{
           novaNota.titulo = event.target.value;
        }
}

return React.createElement(FormInput, props);

};

function criaTextarea(novaNota){
const props = {
        className: 'note__body', 
        name: 'texto', 
        placeholder: 'Criar uma nota...', 
        rows: 5, 
        readOnly: !novaNota.editando,
        defaultValue: novaNota.texto,
        onChange: event =>{
            novaNota.texto = event.target.value;
        }
}
return React.createElement(FormTextarea, props)
};

function criaButtonRemover(removerNota, posicao){
    const props={
          className: 'note__control', 
            type: 'button', 
            onClick: event => props.removerNota(event, posicao)
    }
    const children = React.createElement('i',{
        className: 'fa fa-times',
        'aria-hidden': true
    });
    return React.createElement(FormButton, props, children);
}

function criaButtonConcluir(adicionarNota,posicao, novaNota){
const props = {
       className: 'note__control', 
       type: 'button', 
       onClick: event => props.adicionarNota(novaNota.titulo, novaNota.texto, event.target.form, posicao)
}

const children = 'Concluído'
return React.createElement(FormButton, props, children);

}

function criaForm(){
    const props = {
        className: 'note'
    }
    return React.createElement(Form, props);
}


// destructuring / immutable
// extract function
// variable shorthand declaration
function FormNotas(props) {

    let novaNota = new Nota(props.notaAtual.titulo, props.notaAtual.texto, props.notaAtual.editando);
    let formNotas;
    


    let inputTitulo = criaInput(novaNota);
    let textareaTexto = criaTextarea(novaNota);
    let form = criaForm(props)

 
    let children;
    let onClick;

    if (props.notaAtual.editando) {
        let buttonRemover = criaButtonRemover(props.removerNota, props.posicao);

        let buttonConcluido = FormButton(props.adicionarNota, props.posicao);

        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido];
    } else {
        children = [inputTitulo, textareaTexto];

        click = () => {
            props.editarFormulario(props.posicao);
        }
    }

    formNotas = React.createElement(Form, formProps, children);

        return formNotas;
}

export default FormNotas;