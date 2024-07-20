function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let horas = data.getHours().toString().padStart(2, "0");
  //let horas = 22;
  let minutos = data.getMinutes().toString().padStart(2, "0");
  let momentoDoDia = "";
  let backgroundSection = document.getElementById("content");

  if (horas >= 0 && horas < 6) {
    // MADRUGADA
    img.src = "/src/antes-manha.jpg";
    document.body.style.background = "#a25d8f";
    momentoDoDia = "Madrugada";
  } else if (horas >= 6 && horas < 12) {
    // MANHÃ
    img.src = "/src/manha.jpg";
    document.body.style.background = "#5d6750";
    momentoDoDia = "Manhã";
  } else if (horas >= 12 && horas <= 17) {
    img.src = "/src/tarde.jpg";
    document.body.style.background = "#e27923";
    momentoDoDia = "Tarde";
  } else if (horas > 18) {
    img.src = "/src/noite.jpg";
    document.body.style.background = "#03324c";
    momentoDoDia = "Noite";
  }
  msg.innerHTML = `Agora são ${horas}:${minutos} da ${momentoDoDia}`;
}
