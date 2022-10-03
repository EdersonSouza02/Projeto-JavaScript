var botaoBuscar = document.querySelector("#buscar-paciente");


botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");

console.log("Buscando pacientes da API");
xhr.addEventListener("load",function(){

    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status==200) {
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        
       pacientes.forEach(function(paciente) {
    
        adicionaPacienteNaTabela(paciente);
       });
    
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
         erroAjax.classList.remove("invisivel");
    }

   

});

xhr.send();


})