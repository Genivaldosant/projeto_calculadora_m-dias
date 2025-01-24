const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji celebrando">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Informe a nota mínima: '))

let linhas = '';
form.addEventListener('submit', function(event){ 
    event.preventDefault();

    adicionaLinha();
    atualizaLinha();
    AtualizaMedia();
})

function adicionaLinha(){

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já está inclusa.`)
    } else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>'
    
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

    }

function atualizaLinha(){

    const corpoTable = document.querySelector('tbody');
    corpoTable.innerHTML = linhas;
}

function AtualizaMedia(){
    const médiaFinal = calculaMediaFinal();
    
    /*let footLinha = '<tr>';
    footLinha += `<td>Média final</td>`;
    footLinha += `<td>${médiaFinal}</td>`
    if (médiaFinal >= 7){
        footLinha += '<td><span class="resultado aprovado>Aprovado</span></td>'
    } else{
        footLinha += '<td><span class="resultado reprovado">Reprovado</span></td>'
    }
    footLinha += '</tr>'*/

    document.getElementById('média-final-valor').innerHTML = médiaFinal.toFixed(2);
    document.getElementById('média-final-resultado').innerHTML = médiaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal(){
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length;
}

