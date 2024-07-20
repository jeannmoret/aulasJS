let idade = 67;

if (idade < 16) {
  console.log("Não pode votar");
} else if (idade < 18 || idade > 65) {
  // idade menor que OU maior que
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório");
}

let agora = new Date();
let horas = agora.getHours().toString().padStart(2, "0");
let minutos = agora.getMinutes().toString().padStart(2, "0");
console.log(`Agora são ${horas}:${minutos}`);

if (horas < 12) {
  console.log("Bom Dia");
} else if (horas >= 12 && horas <= 17) {
  console.log("Boa tarde");
} else {
  console.log("Boa Noite");
}
