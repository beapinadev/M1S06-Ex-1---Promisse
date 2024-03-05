// Ex. 1

function verificarPar(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve("Número validado é par");
        } else {
            reject("Error: número informado é ímpar");
        }
    });
}

const numero = 10; // 
verificarPar(numero)
    .then((mensagem) => {
        console.log('Mensagem de sucesso: ', mensagem);
    })
    .catch((erro) => {
        console.log('Mensagem de erro: ', erro);
    });