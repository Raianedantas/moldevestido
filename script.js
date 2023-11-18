
   //função para Altura do Corpo
function evalInput(strInput) {
    // Valor fixo
    var valorFixo = "alturadocorpo=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }
    
    //função para o Altura do quadril 
		function evalInput1(strInput) {
    // Valor fixo
    var valorFixo = "alturadoquadril=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

//função para o busto 
		function evalInput2(strInput) {
    // Valor fixo
    var valorFixo = "busto=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }
    
    //função para o cintura
		function evalInput3(strInput) {
    // Valor fixo
    var valorFixo = "cintura=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

 //função para o comprimento total 
		function evalInput4(strInput) {
    // Valor fixo
    var valorFixo = "comprimentototal=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

 //função para o largura do braço 
		function evalInput5(strInput) {
    // Valor fixo
    var valorFixo = "larguradobraco=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

 //função para o ombro
		function evalInput6(strInput) {
    // Valor fixo
    var valorFixo = "ombro=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

//função para o quadril
		function evalInput7(strInput) {
    // Valor fixo
    var valorFixo = "quadril=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }


//função para o separação separação do busto
		function evalInput8(strInput) {
    // Valor fixo
    var valorFixo = "separacaodobusto=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

function enviarValores() {
            var alturadoCorpoValue = document.getElementsByName('inputField')[0].value;
           var alturadoQuadril = document.getElementsByName('inputField1')[0].value;
           var bustoValue = document.getElementsByName('inputField2')[0].value;
            var cinturaValue = document.getElementsByName('inputField3')[0].value;
            var comprimentoTotalValue = document.getElementsByName('inputField4')[0].value;
            var larguradoBracoValue = document.getElementsByName('inputField5')[0].value;
            var ombroValue = document.getElementsByName('inputField6')[0].value;
            var quadrilValue = document.getElementsByName('inputField7')[0].value;
              var separacaodoBustoValue = document.getElementsByName('inputField8')[0].value;
            		
            evalInput(alturadoCorpoValue);
            evalInput1(alturadoQuadril);
            evalInput2(bustoValue);
            evalInput3(cinturaValue);
	    evalInput4(comprimentoTotalValue);
            evalInput5(larguradoBracoValue);
	    evalInput6(ombroValue);
            evalInput7(quadrilValue);
	    evalInput8(separacaodoBustoValue);
            
}
