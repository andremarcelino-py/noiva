// Datas importantes - edite conforme sua história
const inicioRelacionamento = new Date("2024/07/27 00:00:00");
const inicioNoivado = new Date("2025/01/11 00:00:00");

function calcularTempo(dataInicial) {
  const agora = new Date();
  const diferenca = agora - dataInicial;

  const segundosTotais = Math.floor(diferenca / 1000);
  const minutos = Math.floor(segundosTotais / 60) % 60;
  const horas = Math.floor(segundosTotais / 3600) % 24;
  const diasTotais = Math.floor(segundosTotais / 86400);
  const anos = Math.floor(diasTotais / 365);
  const meses = Math.floor((diasTotais % 365) / 30);
  const dias = (diasTotais % 365) % 30;
  const segundos = segundosTotais % 60;

  return `${anos} anos, ${meses} meses, ${dias} dias, ` +
         `${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
}

function atualizarContadores() {
  document.getElementById("tempoRelacionamento").textContent = calcularTempo(inicioRelacionamento);
  document.getElementById("tempoNoivado").textContent = calcularTempo(inicioNoivado);
}

// Atualiza os dois contadores a cada segundo
setInterval(atualizarContadores, 1000);
atualizarContadores();
