
var funcoes = {
    secao: document.getElementsByClassName("notes")[0],
    lista: [],
    adiciona: function (titulo, texto) {
        var nota = {
            titulo: titulo,
            texto: texto,
            editando: false
        };

        // adicionar nota dentro da lista
        this.lista.push(nota)
        atualizarSecao(this.secao);
    },

    remove: function (evento, posicao) {
        // remover nota da lista de notas   
        this.lista.splice(posicao, 1);
        atualizarSecao(this.secao);
    },
    edita: function (posicao) {
    
        this.lista[posicao].editando = true;
        atualizarSecao(this.secao);
    },
    salva: function (posicao, inputTitulo, textareaTexto) {
        this.lista[posicao].titulo = inputTitulo;
        this.lista[posicao].texto = textareaTexto;
        this.lista[posicao].editando = false;
        atualizarSecao(this.secao);
    },
}


function atualizarSecao(secao) {
    // criar uma variavel que vai guardar o html de todas as notas que devem aparecer na tela
    var conteudoSecao = "";

    // percorrer cada item da lista de notas, criar o html de cada nota e colocar na variavel acima
    for (var posicao = 0; posicao < funcoes.lista.length; posicao++) {
        if (funcoes.lista[posicao].editando) {
            conteudoSecao += '<form class="note">' +
                '<input class="note__title" type="text" name="titulo" value="' + funcoes.lista[posicao].titulo + '" placeholder="Título">' +
                '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + funcoes.lista[posicao].texto + '</textarea>' +
                '<button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ' + posicao + ')">' +
                'Concluído' +
                '</button>' +
                '</form>';
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario(' + posicao + ')">' +
                '<button class="note__control" type="button" onclick="removerNota(event,' + posicao+')">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</button>' +
                '<h1 class="note__title">' + funcoes.lista[posicao].titulo + '</h1>' +
                '<p class="note__body">' + funcoes.lista[posicao].texto + '</p>' +
                '</form>';
        }
         secao.innerHTML = conteudoSecao;
    }
   
}

function editaFormulario(posicao) {
    console.log("Chamou coroi")
    // pegar notar e setar editando = true
    funcoes.edita(posicao)
}

    function adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {
        if (funcoes.lista[posicao]) {
            funcoes.salva(posicao, inputTitulo.value, textareaTexto.value);
        } else {
            funcoes.adiciona(inputTitulo.value, textareaTexto.value);
            formulario.reset();
        }
    }

    function removerNota(evento, posicao) {
        // remover nota da lista de notas
        evento.stopPropagation();
        funcoes.remove(posicao);

    }
