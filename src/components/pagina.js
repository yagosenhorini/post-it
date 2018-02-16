import React from 'react';
import SecaoNotas from './secaoNotas'
import FormNotas from './formNotas'
import Nota from '../nota';
import ListaNotas from '../listaNotas'

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

class Pagina extends React.Component {
    constructor(props){
        super(props);
        // this.atualizaPagina = this.atualizaPagina.bind(this);
        this.state ={
            listaNotas: new ListaNotas(this.atualizaPagina)
        };
    }

    atualizaPagina(novaLista){
        console.log("Quem é this?", this);
    this.setState({
        listaNotas: novaLista
    })    
    }

    editarFormulario(posicao){listaNotas.edita(posicao)};

adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

removerNota(evento, posicao){
    evento.stopPropagation();
    listaNotas.remove(posicao);
}

    render() {
        const props = { className: 'container' };
        let formNotas = criaFormNotas();
        let secaoNotas = criaSecaoNotas();
        const children = [formNotas, secaoNotas];
        return React.createElement('main', props, children)
    }
} export default Pagina;
