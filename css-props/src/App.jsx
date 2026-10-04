import Artigo from './components/Artigo'
import './App.css'
export default function App() {
  return (
    <>
      <h1>Título da Página</h1>
      <p>Este é um parágrafo de exemplo.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <Artigo titulo="titulo1" paragrafo="Este é o conteúdo do artigo 1." />
      <Artigo titulo="titulo2" paragrafo="Este é o conteúdo do artigo 2." />
      <Artigo titulo="titulo3" paragrafo="Este é o conteúdo do artigo 3." />
    </>
  )
}