async function aleatorio() {
    console.log("Antes do await");
    await null
    console.log("Depois do await");
}

console.log("Início");
aleatorio();
console.log("Fim");