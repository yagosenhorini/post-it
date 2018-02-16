import React from 'react';
import SecaoNotas from './secaoNotas'
import FormNotas from './formNotas'
import Nota from '../nota';
import ListaNotas from '../listaNotas'

const listaNotas = new ListaNotas(observaMudancasNaLista);

const editarFormulario = posicao => listaNotas.edita(posicao);

const adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

const removerNota = (evento, posicao) => {
    evento.stopPropagation();
    listaNotas.remove(posicao);
}

function criaFormNotas() {
    const props = {
        notaAtual: new Nota('', ''),
        editarFormulario,
        adicionarNota,
        removerNota
    }
    return React.createElement(FormNotas, props)
};


function criaSecaoNotas() {
    const props = {
        listaNotas, 
        editarFormulario, 
        adicionarNota, 
        removerNota
    }
    return React.createElement(SecaoNotas, props);
};

function Pagina({ SecaoNotas, FormNotas }) {
    const props = { className: 'container' };
    let formNotas = criaFormNotas();
    let secaoNotas = criaSecaoNotas();
    const children = [formNotas, secaoNotas];
    return React.createElement('main', props, children)

    secao = SecaoNotas(posicao, notaAtual, editarFormulario, adicionarNota, removerNota);
    formulario = FormNotas(notaAtual, posicao, adicionarNota, removerNota, editarFormulario);
} export default Pagina;
