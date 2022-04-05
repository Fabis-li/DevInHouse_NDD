function sleep (valor){
    const sono = new Promise ((res, rej) => {
        if (valor >= 0) {
            setTimeout(() => res(valor), 3000);
        } else {
            setTimeout(() => rej("Erro"), 3000);
        }
        return;
    });
    sono
    .then((valor) => console.log (`Retorno da Promise:${valor}`))
    .catch((error) => console.log(error));
};


sleep(3);

