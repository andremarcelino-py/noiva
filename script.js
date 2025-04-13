
const dataInicio = new Date("2024/07/27 00:00:00");

function atualizarTempoJuntos() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const segundosTotais = Math.floor(diferenca / 1000);
  const minutos = Math.floor(segundosTotais / 60) % 60;
  const horas = Math.floor(segundosTotais / 3600) % 24;
  const diasTotais = Math.floor(segundosTotais / 86400);
  const anos = Math.floor(diasTotais / 365);
  const meses = Math.floor((diasTotais % 365) / 30);
  const dias = (diasTotais % 365) % 30;
  const segundos = segundosTotais % 60;

  const texto = `${anos} anos, ${meses} meses, ${dias} dias, ` +
                `${horas} horas, ${minutos} minutos e ${segundos} segundos.`;

  document.getElementById("tempoJuntos").textContent = texto;
}

setInterval(atualizarTempoJuntos, 1000);
atualizarTempoJuntos();
