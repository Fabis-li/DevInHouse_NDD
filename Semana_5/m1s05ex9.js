// Utilizando o setInterval, crie uma função que mostre o horário atual e atualize automaticamente a cada 2 segundos.

// O horário deve ser mostrado no console, no formato HH:MM:SS.

const setIntervalId = setInterval (() =>{
    let horas = new Date();
    let hora = horas.getHours();
    let minuto = horas.getMinutes();
    let segundo = horas.getSeconds();

    console.log(`${hora}:${minuto}:${segundo}`)

}, 2000);

setTimeout(() => clearInterval(setIntervalId), 10000)