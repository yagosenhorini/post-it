import Form from './form.js';
import React from 'react'
import FormInput from './formInput.js'
import FormTextarea from './formTextarea.js'
import FormButton from './formButton.js'
import Nota from '../nota.js'

function criaInput(novaNota) {

    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readOnly: !novaNota.editando,
        defaultValue: novaNota.titulo,
        onChange: event => {
            novaNota.titulo = event.target.value;
        }
    }

    return React.createElement(FormInput, props);

};

function criaTextarea(novaNota) {
    const props = {
        className: 'note__body',
        name: 'texto',
        placeholder: 'Criar uma nota...',
        rows: 5,
        readOnly: !novaNota.editando,
        defaultValue: novaNota.texto,
        onChange: event => {
            novaNota.texto = event.target.value;
        }
    }
    return React.createElement(FormTextarea, props)
};

function criaButtonRemover(removerNota, posicao) {
    const props = {
        className: 'note__control',
        type: 'button',
        onClick: event => props.removerNota(event, posicao)
    }
    const children = React.createElement('i', {
        className: 'fa fa-times',
        'aria-hidden': true
    });
    return React.createElement(FormButton, props, children);
}

function criaButtonConcluir(adicionarNota, posicao, novaNota) {
    const props = {
        className: 'note__control',
        type: 'button',
        onClick: event => props.adicionarNota(novaNota.titulo, novaNota.texto, event.target.form, posicao)
    }
    const children = 'Concluído'
    return React.createElement(FormButton, props, children);
}

function criaForm() {
    const props = {
        className: 'note'
    }
    return React.createElement(Form, props);
}
function FormNotas({ notaAtual, posicao, adicionarNota, removerNota, editarFormulario }) {

    let novaNota = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando);
    let formNotas;
    let inputTitulo = criaInput(novaNota);
    let textareaTexto = criaTextarea(novaNota);
    let formProps = { className: 'note' };
    let children;

    if (novaNota.editando) {
        let buttonRemover = criaButtonRemover(removerNota, posicao);

        let buttonConcluido = criaButtonConcluir(adicionarNota, posicao, novaNota);
        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido];
    } else {
        children = [inputTitulo, textareaTexto];

        formProps.onClick = () =>  editarFormulario(posicao);
    }

    return React.createElement(Form, formProps, children);
} export default FormNotas;