function mostrarIdade() {
    if (document.getElementById("escolhaEstado").value === "usado" || document.getElementById("escolhaEstado").value != "novo") {
        document.getElementById("escolhaIdade").style.pointerEvents = "all";
        document.getElementById("fieldsetChangeIdade").style.border = "2px solid white"
    } else {
        document.getElementById("escolhaIdade").style.pointerEvents = "none";
        document.getElementById("escolhaIdade").value = "Selecione";
        document.getElementById("fieldsetChangeIdade").style.border = "2px solid red";
    }
}

function mostrarParticulas() {
    if (document.getElementById("escolhaCombustivel").value === "diesel" || document.getElementById("escolhaCombustivel").value != "gasolina") {
        document.getElementById("escolhaParticulas").style.pointerEvents = "all";
        document.getElementById("fieldsetChangeParticulas").style.border = "2px solid white";
    } else {
        document.getElementById("escolhaParticulas").style.pointerEvents = "none";
        document.getElementById("fieldsetChangeParticulas").style.border = "2px solid red";
        document.getElementById("escolhaParticulas").value = "Selecione";
    }
}

function selecionarEletrico() {
    if (document.getElementById("escolhaTipo").value === "eletrico") {
        window.alert("Elétricos não pagam ISV!");
        document.getElementById("escolhaTipo").value = "Selecione"
    }
}




var calcularISV = function () {
    var calcularISVBtn = document.getElementById("calcularISV");

    var calcularCilindrada = function () {
        var escolhaCilindrada = document.getElementById("escolhaCilindrada").value; //Retorna o valor inserido no input cilindrada
        var mostraPrecoCilindrada = document.getElementById("mostraPrecoCilindrada"); //Retorna o <td> com o preco

        if (escolhaCilindrada <= 1000) {
            mostraPrecoCilindrada.innerText = (escolhaCilindrada * 1.09 - 849.03).toFixed(2) + '€';
        } else if (escolhaCilindrada > 1001 && escolhaCilindrada <= 1250) {
            mostraPrecoCilindrada.innerText = (escolhaCilindrada * 1.18 - 850.69).toFixed(2) + '€';
        } else {
            mostraPrecoCilindrada.innerText = (escolhaCilindrada * 5.61 - 6194.88).toFixed(2) + '€';
        }

        var pfMostraPrecoCilindrada = parseFloat(mostraPrecoCilindrada.innerText); //Retorna o Preço a pagar pela Cilindrada
        return pfMostraPrecoCilindrada; //Retorna o Preço a pagar pela Cilindrada
    }

    var calcularCO2 = function () {
        var escolhaCO2 = document.getElementById("escolhaCO2").value; //Retorna o valor inserido no input CO2
        var escolhaTestes = document.getElementById("escolhaTestes").value; //Retorna o valor inserido o input testes
        var escolhaCombustivel = document.getElementById("escolhaCombustivel").value; //Retorna o valor inserido input combustivel
        var mostraPrecoCO2 = document.getElementById("mostraPrecoCO2"); //Retorna o <td> com o preco

        if (escolhaCO2 <= 79 && escolhaCombustivel === "gasoleo" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 5.78 - 439.04).toFixed(2) + '€';
        } else if (escolhaCO2 > 80 && escolhaCO2 <= 95 && escolhaCombustivel === "gasoleo" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 23.45 - 1848.58).toFixed(2) + '€';
        } else if (escolhaCO2 > 96 && escolhaCO2 <= 120 && escolhaCombustivel === "gasoleo" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 79.22 - 7195.63).toFixed(2) + '€';
        } else if (escolhaCO2 > 121 && escolhaCO2 <= 140 && escolhaCombustivel === "gasoleo" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 175.73 - 18924.92).toFixed(2) + '€';
        } else if (escolhaCO2 > 141 && escolhaCO2 <= 160 && escolhaCombustivel === "gasoleo" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 195.43 - 21720.92).toFixed(2) + '€';
        } else if (escolhaCO2 > 161 && escolhaCombustivel === "gasoleo" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 268.42 - 33447.90).toFixed(2) + '€';
        } else if (escolhaCO2 <= 110 && escolhaCombustivel === "gasoleo" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 1.72 - 11.50).toFixed(2) + '€';
        } else if (escolhaCO2 > 111 && escolhaCO2 <= 120 && escolhaCombustivel === "gasoleo" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 18.96 - 1906.19).toFixed(2) + '€';
        } else if (escolhaCO2 > 121 && escolhaCO2 <= 140 && escolhaCombustivel === "gasoleo" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 65.04 - 7360.85).toFixed(2) + '€';
        } else if (escolhaCO2 > 141 && escolhaCO2 <= 150 && escolhaCombustivel === "gasoleo" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 127.40 - 16080.57).toFixed(2) + '€';
        } else if (escolhaCO2 > 151 && escolhaCO2 <= 160 && escolhaCombustivel === "gasoleo" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 160.81 - 21176.06).toFixed(2) + '€';
        } else if (escolhaCO2 > 161 && escolhaCO2 <= 170 && escolhaCombustivel === "gasoleo" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 221.69 - 29227.38).toFixed(2) + '€';
        } else if (escolhaCO2 > 171 && escolhaCO2 <= 190 && escolhaCombustivel === "gasoleo" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 274.08 - 36987.98).toFixed(2) + '€';
        } else if (escolhaCO2 > 191 && escolhaCombustivel === "gasoleo" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 282.35 - 38271.32).toFixed(2) + '€';
        } else if (escolhaCO2 <= 99 && escolhaCombustivel === "gasolina" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 4.62 - 427.00).toFixed(2) + '€';
        } else if (escolhaCO2 > 100 && escolhaCO2 <= 115 && escolhaCombustivel === "gasolina" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 8.09 - 750.99).toFixed(2) + '€';
        } else if (escolhaCO2 > 116 && escolhaCO2 <= 145 && escolhaCombustivel === "gasolina" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 52.56 - 5903.94).toFixed(2) + '€';
        } else if (escolhaCO2 > 146 && escolhaCO2 <= 175 && escolhaCombustivel === "gasolina" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 61.24 - 7140.17).toFixed(2) + '€';
        } else if (escolhaCO2 > 176 && escolhaCO2 <= 195 && escolhaCombustivel === "gasolina" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 155.97 - 23627.27).toFixed(2) + '€';
        } else if (escolhaCO2 > 195 && escolhaCombustivel === "gasolina" && escolhaTestes === "nedc") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 205.65 - 33390.12).toFixed(2) + '€';
        } else if (escolhaCO2 <= 110 && escolhaCombustivel === "gasolina" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 0.44 - 43.02).toFixed(2) + '€';
        } else if (escolhaCO2 > 111 && escolhaCO2 <= 115 && escolhaCombustivel === "gasolina" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 1.10 - 115.80).toFixed(2) + '€';
        } else if (escolhaCO2 > 116 && escolhaCO2 <= 120 && escolhaCombustivel === "gasolina" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 1.38 - 147.79).toFixed(2) + '€';
        } else if (escolhaCO2 > 121 && escolhaCO2 <= 130 && escolhaCombustivel === "gasolina" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 5.27 - 619.17).toFixed(2) + '€';
        } else if (escolhaCO2 > 131 && escolhaCO2 <= 145 && escolhaCombustivel === "gasolina" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 6.38 - 762.73).toFixed(2) + '€';
        } else if (escolhaCO2 > 146 && escolhaCO2 <= 175 && escolhaCombustivel === "gasolina" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 41.54 - 5819.56).toFixed(2) + '€';
        } else if (escolhaCO2 > 176 && escolhaCO2 <= 195 && escolhaCombustivel === "gasolina" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 51.38 - 7247.39).toFixed(2) + '€';
        } else if (escolhaCO2 > 196 && escolhaCO2 <= 235 && escolhaCombustivel === "gasolina" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 193.01 - 34190.52).toFixed(2) + '€';
        } else if (escolhaCO2 > 235 && escolhaCombustivel === "gasolina" && escolhaTestes === "wltp") {
            mostraPrecoCO2.innerText = (escolhaCO2 * 233.81 - 41919.96).toFixed(2) + '€';
        }

        var pfMostraPrecoCO2 = parseFloat(mostraPrecoCO2.innerText); //Retorna o Preço a pagar pelo CO2
        return pfMostraPrecoCO2; //Retorna o Preço a pagar pelo CO2
    }

    var calcularTaxaAplicavel = function () {
        var escolhaTipo = document.getElementById("escolhaTipo").value; //Retorna o valor inserido no input Tipo de Veículo
        var importaPrecoCilindrada = calcularCilindrada(); //Retorna o preço calculado na função Cilindrada
        var importaPrecoCO2 = calcularCO2(); //Retorna o preço calculado na função CO2
        var mostraTaxaAplicavel = document.getElementById("mostraTaxaAplicavel"); //Retorna o <td> com a taxa aplicável
        var precoTaxaAplicavel = importaPrecoCilindrada + importaPrecoCO2; //Retorna o preço do CO2 + Cilindrada

        if (escolhaTipo === "monovolume" || escolhaTipo === "gasNatural") {
            mostraTaxaAplicavel.innerText = (precoTaxaAplicavel * 0.40).toFixed(2) + '€';
        } else if (escolhaTipo === "taxi") {
            mostraTaxaAplicavel.innerText = (precoTaxaAplicavel * 0.70).toFixed(2) + '€';
        } else if (escolhaTipo === "hibridoPlugin") {
            mostraTaxaAplicavel.innerText = (precoTaxaAplicavel * 0.25).toFixed(2) + '€';
        } else if (escolhaTipo === "hibrido") {
            mostraTaxaAplicavel.innerText = (precoTaxaAplicavel * 0.60).toFixed(2) + '€';
        } else if (escolhaTipo === "eletrico") {
            window.alert("Veículos Elétricos não pagam ISV")
        } else {
            mostraTaxaAplicavel.innerText = (precoTaxaAplicavel * 1).toFixed(2) + '€';
        }

        var pfMostraTaxaAplicavel = parseFloat(mostraTaxaAplicavel.innerText); //Retorna Preço a pagar pela taxa aplicável da tabela
        return pfMostraTaxaAplicavel; //Retorna Preço a pagar pela taxa aplicável da tabela
    }

    var calcularReducaoAnosDeUso = function () {
        var escolhaIdade = document.getElementById("escolhaIdade").value; //Retorna o valor inserido no input da idade
        var mostraReducaoCilindrada = document.getElementById("mostraReducaoCilindrada"); //Retorna o <td> com a reducao da cilindrada
        var mostraReducaoCO2 = document.getElementById("mostraReducaoCO2"); //Retorna o <td> com a reducao do CO2
        var importaPrecoCilindrada = calcularCilindrada(); //Importa o preco da cilindrada
        var importaPrecoCO2 = calcularCO2(); //Importa o preco do CO2

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
        } else {
            mostraReducaoCilindrada.innerText = (importaPrecoCilindrada * 0.80).toFixed(2) + '€';
        }

        if (escolhaIdade === "1" || escolhaIdade === "2") {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.10).toFixed(2) + '€';
        } else if (escolhaIdade === "3" || escolhaIdade === "4") {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.20).toFixed(2) + '€';
        } else if (escolhaIdade === "5" || escolhaIdade === "6") {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.28).toFixed(2) + '€';
        } else if (escolhaIdade === "7") {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.35).toFixed(2) + '€';
        } else if (escolhaIdade === "8" || escolhaIdade === "9") {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.43).toFixed(2) + '€';
        } else if (escolhaIdade === "10") {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.52).toFixed(2) + '€';
        } else if (escolhaIdade === "11" || escolhaIdade === "12") {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.60).toFixed(2) + '€';
        } else if (escolhaIdade === "13") {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.65).toFixed(2) + '€';
        } else if (escolhaIdade === "14") {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.70).toFixed(2) + '€';
        } else if (escolhaIdade === "15") {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.75).toFixed(2) + '€';
        } else {
            mostraReducaoCO2.innerText = (importaPrecoCO2 * 0.80).toFixed(2) + '€';
        }

        var valorReducaoAnosDeUso = parseFloat(mostraReducaoCilindrada.innerText) + parseFloat(mostraReducaoCO2.innerText);
        return valorReducaoAnosDeUso;
    }

    var calcularAgravamentoDeParticulas = function () {
        var escolhaParticulas = document.getElementById("escolhaParticulas").value; //Retorna o valor inserido no input particulas
        var mostraAgravamentoParticulas = document.getElementById("mostraAgravamentoParticulas"); //Retorna o <td> com o agravamento de particulas

        if (escolhaParticulas === "mais") {
            mostraAgravamentoParticulas.innerText = (500.00).toFixed(2) + '€';
        } else {
            mostraAgravamentoParticulas.innerText = 0;
        }

        var pfMostraAgravamentoParticulas = parseFloat(mostraAgravamentoParticulas.innerText);
        return pfMostraAgravamentoParticulas;
    }

    var calcularReducaoAgravamentoDeParticulas = function () {
        var escolhaPais = document.getElementById("escolhaPais").value;
        var escolhaIdade = document.getElementById("escolhaIdade").value; //Retorna o valor inserido no input da idade
        var mostraReducaoParticulas = document.getElementById("mostraReducaoParticulas"); //Retorna o <td> com a reducao do agravamento de particulas
        var importaPrecoParticulas = calcularAgravamentoDeParticulas();
        console.log("Preço Particulas: ", importaPrecoParticulas);
        console.log("País: ", escolhaPais);

        if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "1" || escolhaIdade === "2") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.10).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "3" || escolhaIdade === "4") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.20).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "5" || escolhaIdade === "6") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.28).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "7") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.35).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "8" || escolhaIdade === "9") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.43).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "10") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.52).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "11" || escolhaIdade === "12") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.60).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "13") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.65).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "14") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.70).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "15") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.75).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais === "estadoMembro" && escolhaIdade === "16") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 0.80).toFixed(2) + '€';
        } else if (importaPrecoParticulas && escolhaPais != "estadoMembro" && escolhaIdade === "3" || escolhaIdade === "4") {
            mostraReducaoParticulas.innerText = (importaPrecoParticulas * 1).toFixed(2) + '€';
        }

        var valorReducaoAgravamentoDeParticulas = parseFloat(mostraReducaoParticulas.innerText);
        return valorReducaoAgravamentoDeParticulas;
    }

    var calcularValorTotal = function () {
        var importarPrecoComponente3 = calcularTaxaAplicavel();
        var importarPrecoComponente4 = calcularReducaoAnosDeUso();
        var importarPrecoComponente5 = calcularAgravamentoDeParticulas();
        var importarPrecoComponente6 = calcularReducaoAgravamentoDeParticulas();
        var mostraPrecoFinal = document.getElementById("mostraPrecoFinal");
        mostraPrecoFinal.innerText = (importarPrecoComponente3 - importarPrecoComponente4 + importarPrecoComponente5 - importarPrecoComponente6).toFixed(2) + '€';
        var pfMostraPrecoFinal = parseFloat(mostraPrecoFinal.innerText);
        return pfMostraPrecoFinal;
    }

    calcularISVBtn.addEventListener("click", function () {
        calcularCilindrada();
        calcularCO2();
        calcularTaxaAplicavel();
        calcularReducaoAnosDeUso();
        calcularAgravamentoDeParticulas();
        calcularReducaoAgravamentoDeParticulas();
        calcularValorTotal();
    })
}