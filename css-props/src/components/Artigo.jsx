import Artigo from './Artigo.css';
export default function Artigo(props) {
    return (
        <article>
            <h1>{props.titulo}</h1>
            <p>{props.paragrafo}</p>
        </article>
    )
}