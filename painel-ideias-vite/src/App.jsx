import { useState } from 'react'
import './App.css'

export default function App() {
  const [ideias, setIdeias] = useState([])
  const [texto, setTexto] = useState('')
  const [erro, setErro] = useState('')

  function adicionarIdeia(event) {
    event.preventDefault()
    if (!texto.trim()) {
      setErro('Digite sua ideia antes de adicionar.')
      return
    }

    const novaIdeia = {
      id: Date.now(),
      texto: texto.trim(),
      feita: false
    }

    setIdeias(atual => [...atual, novaIdeia])
    setTexto('')
    setErro('')
  }

  function alternarFeita(id) {
    setIdeias(atual =>
      atual.map(ideia =>
        ideia.id === id 
        ? { ...ideia, feita: !ideia.feita } 
        : ideia))
  }

  function removerIdeia(id) {
    setIdeias(atual => 
      atual.filter(ideia => ideia.id !== id))
  }

  const concluidas = ideias.filter(ideia => ideia.feita).length

  return (
    <div>
      <h1>Painel de Ideias</h1>

      <form onSubmit={adicionarIdeia}>
        <input
          type="text" value={texto}
          onChange={event => {
            setTexto(event.target.value)
            setErro('')
          }}
          placeholder="Digite uma ideia..."
        />

        <button type="submit">Adicionar</button>
      </form>

      {erro && <p>{erro}</p>}

      <ul>
        {ideias.map(ideia => (
          <li key={ideia.id}>
            <input
              type="checkbox"
              checked={ideia.feita}
              onChange={() => alternarFeita(ideia.id)}
            />
            <span className={ideia.feita ? 'feita' : ''}>
              {ideia.texto}
            </span>

            <button onClick={() => removerIdeia(ideia.id)}>✖️</button>
          </li>
        ))}
      </ul>

      <footer>{`${ideias.length} ideias no painel · ${concluidas} concluídas`}</footer>
    </div>
  )
}