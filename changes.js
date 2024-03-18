/* código novo de calcularReducaoAnosDeUso com aninhamento de if's >>>>>> Este código é o correto! */
var calcularReducaoAnosDeUso = function () {
    var escolhaIdade = document.getElementById("escolhaIdade").value; //Retorna o valor inserido no input da idade
    var escolhaPais = document.getElementById("escolhaPais").value;
    var escolhaTipo = document.getElementById("escolhaTipo").value;
    var mostraReducaoCilindrada = document.getElementById("mostraReducaoCilindrada"); //Retorna o <td> com a reducao da cilindrada
    var mostraReducaoCO2 = document.getElementById("mostraReducaoCO2"); //Retorna o <td> com a reducao do CO2
    var importaPrecoCilindrada = calcularCilindrada(); //Importa o preco da cilindrada
    var importaPrecoCO2 = calcularCO2(); //Importa o preco do CO2

    if (importaPrecoCilindrada != null) {
        if (escolhaPais === "estadoMembro" && escolhaPais != null) {
            if (escolhaTipo === "ligeiro" || escolhaTipo === "naoConvencional" || escolhaTipo === "classico") {
                if (escolhaIdade === "1") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.10).toFixed(2) + '€';
                } else if (escolhaIdade === "2") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.20).toFixed(2) + '€';
                } else if (escolhaIdade === "3") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.28).toFixed(2) + '€';
                } else if (escolhaIdade === "4") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.35).toFixed(2) + '€';
                } else if (escolhaIdade === "5") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.43).toFixed(2) + '€';
                } else if (escolhaIdade === "6") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.52).toFixed(2) + '€';
                } else if (escolhaIdade === "7") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60).toFixed(2) + '€';
                } else if (escolhaIdade === "8") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.65).toFixed(2) + '€';
                } else if (escolhaIdade === "9") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.70).toFixed(2) + '€';
                } else if (escolhaIdade === "10") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.75).toFixed(2) + '€';
                } else if (escolhaIdade === "11" || escolhaIdade === "12" || escolhaIdade === "13" || escolhaIdade === "14" || escolhaIdade === "15" || escolhaIdade === "16") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.80).toFixed(2) + '€';
                } else {
                    mostraReducaoCilindrada.innerText = 'Erro. Verifique os valores.';
                }
            } else if (escolhaTipo === "gasNatural" || escolhaTipo === "monovolume") {
                if (escolhaIdade === "1") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.10).toFixed(2) + '€';
                } else if (escolhaIdade === "2") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.20).toFixed(2) + '€';
                } else if (escolhaIdade === "3") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.28).toFixed(2) + '€';
                } else if (escolhaIdade === "4") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.35).toFixed(2) + '€';
                } else if (escolhaIdade === "5") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.43).toFixed(2) + '€';
                } else if (escolhaIdade === "6") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.52).toFixed(2) + '€';
                } else if (escolhaIdade === "7") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.60).toFixed(2) + '€';
                } else if (escolhaIdade === "8") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.65).toFixed(2) + '€';
                } else if (escolhaIdade === "9") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.70).toFixed(2) + '€';
                } else if (escolhaIdade === "10") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.75).toFixed(2) + '€';
                } else if (escolhaIdade === "11" || escolhaIdade === "12" || escolhaIdade === "13" || escolhaIdade === "14" || escolhaIdade === "15" || escolhaIdade === "16") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.40 * 0.80).toFixed(2) + '€';
                } else {
                    mostraReducaoCilindrada.innerText = 'Erro. Verifique os valores.';
                }
            } else if (escolhaTipo === "hibrido") {
                if (escolhaIdade === "1") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.10).toFixed(2) + '€';
                } else if (escolhaIdade === "2") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.20).toFixed(2) + '€';
                } else if (escolhaIdade === "3") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.28).toFixed(2) + '€';
                } else if (escolhaIdade === "4") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.35).toFixed(2) + '€';
                } else if (escolhaIdade === "5") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.43).toFixed(2) + '€';
                } else if (escolhaIdade === "6") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.52).toFixed(2) + '€';
                } else if (escolhaIdade === "7") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.60).toFixed(2) + '€';
                } else if (escolhaIdade === "8") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.65).toFixed(2) + '€';
                } else if (escolhaIdade === "9") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.70).toFixed(2) + '€';
                } else if (escolhaIdade === "10") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.75).toFixed(2) + '€';
                } else if (escolhaIdade === "11" || escolhaIdade === "12" || escolhaIdade === "13" || escolhaIdade === "14" || escolhaIdade === "15" || escolhaIdade === "16") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60 * 0.80).toFixed(2) + '€';
                } else {
                    mostraReducaoCilindrada.innerText = 'Erro. Verifique os valores.';
                }
            } else if (escolhaTipo === "hibridoPlugin") {
                if (escolhaIdade === "1") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.10).toFixed(2) + '€';
                } else if (escolhaIdade === "2") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.20).toFixed(2) + '€';
                } else if (escolhaIdade === "3") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.28).toFixed(2) + '€';
                } else if (escolhaIdade === "4") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.35).toFixed(2) + '€';
                } else if (escolhaIdade === "5") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.43).toFixed(2) + '€';
                } else if (escolhaIdade === "6") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.52).toFixed(2) + '€';
                } else if (escolhaIdade === "7") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.60).toFixed(2) + '€';
                } else if (escolhaIdade === "8") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.65).toFixed(2) + '€';
                } else if (escolhaIdade === "9") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.70).toFixed(2) + '€';
                } else if (escolhaIdade === "10") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.75).toFixed(2) + '€';
                } else if (escolhaIdade === "11" || escolhaIdade === "12" || escolhaIdade === "13" || escolhaIdade === "14" || escolhaIdade === "15" || escolhaIdade === "16") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.25 * 0.80).toFixed(2) + '€';
                } else {
                    mostraReducaoCilindrada.innerText = 'Erro. Verifique os valores.';
                }
            } else if (escolhaTipo === "taxi") {
                if (escolhaIdade === "1") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.10).toFixed(2) + '€';
                } else if (escolhaIdade === "2") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.20).toFixed(2) + '€';
                } else if (escolhaIdade === "3") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.28).toFixed(2) + '€';
                } else if (escolhaIdade === "4") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.35).toFixed(2) + '€';
                } else if (escolhaIdade === "5") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.43).toFixed(2) + '€';
                } else if (escolhaIdade === "6") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.52).toFixed(2) + '€';
                } else if (escolhaIdade === "7") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.60).toFixed(2) + '€';
                } else if (escolhaIdade === "8") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.65).toFixed(2) + '€';
                } else if (escolhaIdade === "9") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.70).toFixed(2) + '€';
                } else if (escolhaIdade === "10") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.75).toFixed(2) + '€';
                } else if (escolhaIdade === "11" || escolhaIdade === "12" || escolhaIdade === "13" || escolhaIdade === "14" || escolhaIdade === "15" || escolhaIdade === "16") {
                    mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.30 * 0.80).toFixed(2) + '€';
                } else {
                    mostraReducaoCilindrada.innerText = 'Erro. Verifique os valores.';
                }
            } else {
                return 0;
            }
        } else {
            mostraReducaoCilindrada.innerText = (0.00).toFixed(2) + '€';
        }
    }

    if (importaPrecoCO2 != null) {
        if (escolhaPais === "estadoMembro" && escolhaPais != null) {
            if (escolhaTipo === "ligeiro" || escolhaTipo === "naoConvencional" || escolhaTipo === "classico") {
                if (escolhaIdade === "1" || escolhaIdade === "2" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.10).toFixed(2) + '€';
                } else if (escolhaIdade === "3" || escolhaIdade === "4" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.20).toFixed(2) + '€';
                } else if (escolhaIdade === "5" || escolhaIdade === "6" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.28).toFixed(2) + '€';
                } else if (escolhaIdade === "7" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.35).toFixed(2) + '€';
                } else if (escolhaIdade === "8" || escolhaIdade === "9" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.43).toFixed(2) + '€';
                } else if (escolhaIdade === "10" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.52).toFixed(2) + '€';
                } else if (escolhaIdade === "11" || escolhaIdade === "12" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60).toFixed(2) + '€';
                } else if (escolhaIdade === "13" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.65).toFixed(2) + '€';
                } else if (escolhaIdade === "14" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.70).toFixed(2) + '€';
                } else if (escolhaIdade === "15" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.75).toFixed(2) + '€';
                } else if (escolhaIdade === "16" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.80).toFixed(2) + '€';
                } else {
                    mostraReducaoCO2.innerText = 'Erro. Verifique os valores.';
                }
            } else if (escolhaTipo === "gasNatural" || escolhaTipo === "monovolume") {
                if (escolhaIdade === "1" || escolhaIdade === "2" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.10).toFixed(2) + '€';
                } else if (escolhaIdade === "3" || escolhaIdade === "4" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.20).toFixed(2) + '€';
                } else if (escolhaIdade === "5" || escolhaIdade === "6" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.28).toFixed(2) + '€';
                } else if (escolhaIdade === "7" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.35).toFixed(2) + '€';
                } else if (escolhaIdade === "8" || escolhaIdade === "9" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.43).toFixed(2) + '€';
                } else if (escolhaIdade === "10" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.52).toFixed(2) + '€';
                } else if (escolhaIdade === "11" || escolhaIdade === "12" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.60).toFixed(2) + '€';
                } else if (escolhaIdade === "13" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.65).toFixed(2) + '€';
                } else if (escolhaIdade === "14" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.70).toFixed(2) + '€';
                } else if (escolhaIdade === "15" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.75).toFixed(2) + '€';
                } else if (escolhaIdade === "16" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.40 * 0.80).toFixed(2) + '€';
                } else {
                    mostraReducaoCO2.innerText = 'Erro. Verifique os valores.';
                }
            } else if (escolhaTipo === "hibrido") {
                if (escolhaIdade === "1" || escolhaIdade === "2" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.10).toFixed(2) + '€';
                } else if (escolhaIdade === "3" || escolhaIdade === "4" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.20).toFixed(2) + '€';
                } else if (escolhaIdade === "5" || escolhaIdade === "6" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.28).toFixed(2) + '€';
                } else if (escolhaIdade === "7" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.35).toFixed(2) + '€';
                } else if (escolhaIdade === "8" || escolhaIdade === "9" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.43).toFixed(2) + '€';
                } else if (escolhaIdade === "10" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.52).toFixed(2) + '€';
                } else if (escolhaIdade === "11" || escolhaIdade === "12" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.60).toFixed(2) + '€';
                } else if (escolhaIdade === "13" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.65).toFixed(2) + '€';
                } else if (escolhaIdade === "14" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.70).toFixed(2) + '€';
                } else if (escolhaIdade === "15" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.75).toFixed(2) + '€';
                } else if (escolhaIdade === "16" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60 * 0.80).toFixed(2) + '€';
                } else {
                    mostraReducaoCO2.innerText = 'Erro. Verifique os valores.';
                }
            } else if (escolhaTipo === "hibridoPlugin") {
                if (escolhaIdade === "1" || escolhaIdade === "2" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.10).toFixed(2) + '€';
                } else if (escolhaIdade === "3" || escolhaIdade === "4" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.20).toFixed(2) + '€';
                } else if (escolhaIdade === "5" || escolhaIdade === "6" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.28).toFixed(2) + '€';
                } else if (escolhaIdade === "7" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.35).toFixed(2) + '€';
                } else if (escolhaIdade === "8" || escolhaIdade === "9" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.43).toFixed(2) + '€';
                } else if (escolhaIdade === "10" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.52).toFixed(2) + '€';
                } else if (escolhaIdade === "11" || escolhaIdade === "12" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.60).toFixed(2) + '€';
                } else if (escolhaIdade === "13" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.65).toFixed(2) + '€';
                } else if (escolhaIdade === "14" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.70).toFixed(2) + '€';
                } else if (escolhaIdade === "15" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.75).toFixed(2) + '€';
                } else if (escolhaIdade === "16" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.25 * 0.80).toFixed(2) + '€';
                } else {
                    mostraReducaoCO2.innerText = 'Erro. Verifique os valores.';
                }
            } else if (escolhaTipo === "taxi") {
                if (escolhaIdade === "1" || escolhaIdade === "2" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.10).toFixed(2) + '€';
                } else if (escolhaIdade === "3" || escolhaIdade === "4" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.20).toFixed(2) + '€';
                } else if (escolhaIdade === "5" || escolhaIdade === "6" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.28).toFixed(2) + '€';
                } else if (escolhaIdade === "7" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.35).toFixed(2) + '€';
                } else if (escolhaIdade === "8" || escolhaIdade === "9" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.43).toFixed(2) + '€';
                } else if (escolhaIdade === "10" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.52).toFixed(2) + '€';
                } else if (escolhaIdade === "11" || escolhaIdade === "12" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.60).toFixed(2) + '€';
                } else if (escolhaIdade === "13" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.65).toFixed(2) + '€';
                } else if (escolhaIdade === "14" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.70).toFixed(2) + '€';
                } else if (escolhaIdade === "15" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.75).toFixed(2) + '€';
                } else if (escolhaIdade === "16" && escolhaPais === "estadoMembro") {
                    mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.30 * 0.80).toFixed(2) + '€';
                } else {
                    mostraReducaoCO2.innerText = 'Erro. Verifique os valores.';
                }
            } else {
                return 0;
            }
        } else {
            mostraReducaoCO2.innerText = (0.00).toFixed(2) + '€';
        }
    }

    var valorReducaoAnosDeUso = parseFloat(mostraReducaoCilindrada.innerText) + parseFloat(mostraReducaoCO2.innerText);
    return valorReducaoAnosDeUso;
}



















/* código antigo de calularReducaoAnosDeUso */

var calcularReducaoAnosDeUso = function () {
    var escolhaIdade = document.getElementById("escolhaIdade").value; //Retorna o valor inserido no input da idade
    var escolhaPais = document.getElementById("escolhaPais").value;
    var mostraReducaoCilindrada = document.getElementById("mostraReducaoCilindrada"); //Retorna o <td> com a reducao da cilindrada
    var mostraReducaoCO2 = document.getElementById("mostraReducaoCO2"); //Retorna o <td> com a reducao do CO2
    var importaPrecoCilindrada = calcularCilindrada(); //Importa o preco da cilindrada
    var importaPrecoCO2 = calcularCO2(); //Importa o preco do CO2

    if (escolhaPais != "estadoMembro" || escolhaPais === "paisTerceiro") {
        mostraReducaoCilindrada.innerText = (0.00).toFixed(2) + '€';
    } else if (escolhaIdade === "1" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.10).toFixed(2) + '€';
    } else if (escolhaIdade === "2" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.20).toFixed(2) + '€';
    } else if (escolhaIdade === "3" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.28).toFixed(2) + '€';
    } else if (escolhaIdade === "4" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.35).toFixed(2) + '€';
    } else if (escolhaIdade === "5" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.43).toFixed(2) + '€';
    } else if (escolhaIdade === "6" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.52).toFixed(2) + '€';
    } else if (escolhaIdade === "7" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.60).toFixed(2) + '€';
    } else if (escolhaIdade === "8" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.65).toFixed(2) + '€';
    } else if (escolhaIdade === "9" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.70).toFixed(2) + '€';
    } else if (escolhaIdade === "10" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.75).toFixed(2) + '€';
    } else if (escolhaIdade === "11" || escolhaIdade === "12" || escolhaIdade === "13" || escolhaIdade === "14" || escolhaIdade === "15" || escolhaIdade === "16" && escolhaPais === "estadoMembro") {
        mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.80).toFixed(2) + '€';
    }

    if (escolhaPais != "estadoMembro" || escolhaPais === "paisTerceiro") {
        mostraReducaoCO2.innerText = (0.00).toFixed(2) + '€';
    } else if (escolhaIdade === "1" || escolhaIdade === "2" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.10).toFixed(2) + '€';
    } else if (escolhaIdade === "3" || escolhaIdade === "4" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.20).toFixed(2) + '€';
    } else if (escolhaIdade === "5" || escolhaIdade === "6" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.28).toFixed(2) + '€';
    } else if (escolhaIdade === "7" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.35).toFixed(2) + '€';
    } else if (escolhaIdade === "8" || escolhaIdade === "9" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.43).toFixed(2) + '€';
    } else if (escolhaIdade === "10" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.52).toFixed(2) + '€';
    } else if (escolhaIdade === "11" || escolhaIdade === "12" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60).toFixed(2) + '€';
    } else if (escolhaIdade === "13" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.65).toFixed(2) + '€';
    } else if (escolhaIdade === "14" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.70).toFixed(2) + '€';
    } else if (escolhaIdade === "15" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.75).toFixed(2) + '€';
    } else if (escolhaIdade === "16" && escolhaPais === "estadoMembro") {
        mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.80).toFixed(2) + '€';
    }

    var valorReducaoAnosDeUso = parseFloat(mostraReducaoCilindrada.innerText) + parseFloat(mostraReducaoCO2.innerText);
    return valorReducaoAnosDeUso;
}