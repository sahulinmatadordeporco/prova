let usuarios = [];

function adicionarUsuario(nome, idade, email) {
  if (!nome || !idade || !email) {
    console.error("Erro: todos os campos são obrigatórios");
    return;
  }
  if (idade <= 0) {
    console.error("Erro: idade deve ser maior que 0");
    return;
  }
  usuarios.push({ nome, idade, email });
  console.log("Usuário adicionado com sucesso!");
}

function listarUsuarios() {
  console.log("Usuários cadastrados:");
  for (let i = 0; i < usuarios.length; i++) {
    console.log(`#${i + 1} - ${usuarios[i].nome}, ${usuarios[i].idade} anos, ${usuarios[i].email}`);
  }
}

adicionarUsuario("thomas", 16, "thomas@gmail.com");
adicionarUsuario("rafael", 18, "rafael@gmail.com");
adicionarUsuario("vitor", 17, "vitor@gmail.com");

listarUsuarios();