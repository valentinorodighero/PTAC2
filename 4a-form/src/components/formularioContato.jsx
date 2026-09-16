import { useState } from "react"
export default function formularioContato() {
    const [nome, setNome] = useState('')
    const [erro, setErro] = useState("")
    function aoEnviar(event) {
        event.preventDefault()
        if (nome.trim() === "") {
            setErro("O nome é obrigatório")
            return
        }
        setErro("")
        setNome("")
        console.log("Formulário enviado")
    }
    
    return (
        <>
            <form onSubmit={aoEnviar}>
                <label htmlFor="name">Nome Completo</label>
                <input
                    type="text"
                    id="name"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    placeholder="Digite seu nome"
                />
                {erro && <p style={{ color: "red" }}>Erro: {erro}</p>}
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}