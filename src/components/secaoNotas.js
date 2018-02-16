import React from 'react';
import Section from './section';
import FormNotas from './formNotas';
// import listaNotas from '../listaNotas';

function criaFormNotas(posicao, props) {
    const propsForm = {
        posicao: posicao,
        notaAtual: props.listaNotas.pega(posicao),
        editarFormulario: props.editarFormulario,
        adicionarNota: props.adicionarNota,
        removerNota: props.removerNota
    }
    return React.createElement(FormNotas, propsForm);
}

function SecaoNotas({listaNotas, editarFormulario, adicionarNota,removerNota}) {
    const propsSection = { className: 'notes' };
    children = props.listaNotas.map((notaAtual, posicao) => criaFormNotas(posicao, props));


    return React.createElement(Section, propsSection, children);
} export default SecaoNotas;