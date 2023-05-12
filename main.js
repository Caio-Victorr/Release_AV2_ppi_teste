function assertEquals(esperado, recebido) {
    if (esperado === recebido) {
        console.info(true);
        return true;
    }
    else {
        console.error(`Esperado: ${esperado}`);
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
}

function assertMoreThan(esperado, recebido) {
    if (recebido === undefined) {
        console.error(`Esperado: ${esperado}`);
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
    else if (recebido > esperado) {
        console.info(true);
        return true;
    }
    else {
        console.error(`Esperado: ${esperado}`);
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
}

function assertMoreOrEquals(esperado, recebido) {
    if (recebido === undefined) {
        console.error(`Esperado: ${esperado}`);
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
    else if (recebido >= esperado) {
        console.info(true);
        return true;
    }
    else {
        console.error(`Esperado: ${esperado}`);
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
}

function assertNotEquals(esperado, recebido) {
    if (esperado !== recebido) {
        console.info(true);
        return true;
    }
    else {
        console.error(`Esperado: ${esperado}`);
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
}


function capturarDadosUsuario() {
    
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var perfil = document.getElementById("perfil").value;
    var estado = document.getElementById("estado").value;
    var cidade = document.getElementById("cidade").value;
    var titulo = document.getElementById("Titulo").value;
    assertMoreThan(0, nome.length);
    assertMoreOrEquals(2, nome.length);
    assertMoreThan(0, cpf.length);
    assertEquals(11, cpf.length);
    assertMoreThan(0, telefone.length);
    assertEquals(11, telefone.length);
    assertNotEquals("none", perfil);
    assertNotEquals("none", estado);
    assertNotEquals("none", cidade);
    
    assertMoreThan(0, titulo.length)
    assertMoreOrEquals(2, titulo.length)
    var usuario = {
        nome, cpf, telefone, perfil, estado, cidade
    }

    var livros = {
        titulo, isbn, area
    }

    console.log(usuario);

}