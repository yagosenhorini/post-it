const ADD_NOTA = 'ADD_NOTA'
const ALTERAR_NOTA = 'ALTERAR_NOTA'
const REMOVE_NOTA = 'REMOVE_NOTA'
const HABILITAR_EDICAO = 'HABILITAR_EDICAO'

//Adicionar nota
export function addNota(titulo, texto){
    return{
        type: ADD_NOTA,
        titulo,
        texto
    }
}

//remover nota
export function removeNota(posicao){
    return{
        type: REMOVE_NOTA,
        posicao
    }
} 

//editar nota
export function habilitarEdicao(posicao){
    return{
        type: HABILITAR_EDICAO,
        posicao
    }
}

//salvar nota
export function alterarNota(titulo, texto, posicao){
    return{
        type: ALTERAR_NOTA,
        titulo, 
        texto, 
        posicao
    }
}