import React from 'react';
import Section from './section';
import FormNotas from './formNotas';
// import listaNotas from '../listaNotas';

function criaFormNotas(props) {
    const props = {
        posicao: posicao,
        notaAtual: props.listaNotas.pega(posicao),
        editarFormulario: props.editarFormulario,
        adicionarNota: props.adicionarNota,
        removerNota: props.removerNota
    }
    return React.createElement(FormNotas, props, children);
}

function SecaoNotas({ listaNotas, editarFormulario, posicao, adicionarNota, removerNota }) {
    const props = { className: 'notes' };
    const children = [];
    for (let i = 0; i < listaNotas.contaTotal(); i++) {
        let nota = listaNotas.pega(posicao);
        let formNotas = criaFormNotas(posicao, nota, editarFormulario, adicionarNota, removerNota);
        children.push(formNotas, propsForm);
    }
    return React.createElement(Section, props, children);
} export default SecaoNotas;