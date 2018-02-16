import React from 'react';
import SecaoNotas from './secaoNotas'
import FormNotas from './formNotas'
import Nota from '../nota';
import ListaNotas from '../listaNotas'

function criaFormNotas(adicionarNota, editarFormulario, removerNota) {
    const props = {
        notaAtual: new Nota('', ''),
        adicionarNota,
        editarFormulario,

        removerNota
    }
    return React.createElement(FormNotas, props)
};


function criaSecaoNotas(listaNotas, adicionarNota, editarFormulario, removerNota) {
    const props = {
        listaNotas,
        adicionarNota,
        editarFormulario,
        removerNota
    }
    return React.createElement(SecaoNotas, props);
};

class Pagina extends React.Component {
    constructor(props) {
        super(props);
        // this.atualizaPagina = this.atualizaPagina.bind(this);
        this.state = {
            listaNotas: new ListaNotas(this.atualizaPagina)
        };
    }

    atualizaPagina(novaLista) {
        console.log("Quem é this?", this);
        this.setState({
            listaNotas: novaLista
        })
    }

    editarFormulario(posicao) { this.state.listaNotas.edita(posicao) };

    adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {
        if (this.state.listaNotas.pega(posicao)) {
            this.state.listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
        } else {
            this.state.listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
            formulario.reset();
        }
    }

    removerNota(evento, posicao) {
        evento.stopPropagation();
        this.state.listaNotas.remove(posicao);
    }

    render() {
        const props = { className: 'container' };
        let formNotas = criaFormNotas(this.adicionarNota, this.editarFormulario, this.removerNota);
        let secaoNotas = criaSecaoNotas(this.state.listaNotas, this.adicionarNota, this.editarFormulario, this.removerNota);
        const children = [formNotas, secaoNotas];
        return React.createElement('main', props, children)
    }
} export default Pagina;
