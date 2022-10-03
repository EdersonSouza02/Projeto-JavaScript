var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

console.log("Tamanho do Array " + pacientes.length);


    for(var i = 0; i<pacientes.length; i++){
        console.log(pacientes[i]);

        var paciente = pacientes[i];
        
        var tdNome = paciente.querySelector(".info-nome");

        var tdPeso = paciente.querySelector(".info-peso");
        
        var tdAltura = paciente.querySelector(".info-altura");
        var tdImc = paciente.querySelector(".info-imc");
        
        
        var nomePaciente = tdNome.textContent;
        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;
        
        var pesoEhValido = validaPeso(peso);
        var alturaEhValido = validaAltura(altura);
        
        if (!pesoEhValido) {
            console.log("Peso Inválido");
            pesoEhValido = false;
            tdImc.textContent = "Peso Inválido";
            paciente.classList.add("paciente-invalido");
        }
        
        if (!alturaEhValido) {
            console.log("Altura Inválida");
            alturaEhValido = false;
            tdImc.textContent = "Altura Inválida";
            paciente.classList.add("paciente-invalido");
        }
        
        if (alturaEhValido && pesoEhValido) {
            var imc = calcularImc(peso,altura);
            tdImc.textContent = imc;
        }
    }


    function calcularImc(peso,altura) {
        var imc = 0;

        imc = peso/(altura*altura);

        return imc.toFixed(2);
    }


    function validaPeso(peso) {
        if (peso>=0  && peso<1000) {
            return true;
        }else{
            return false;
        }
    }

    function validaAltura(altura) {
        if (altura>=0  && altura<3.0) {
            return true;
        }else{
            return false;
        }
    }








