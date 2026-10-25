export default function Previa({ tema }) {
    return (
        <div className={tema}>
            <h2>Prévia do tema</h2>
            <p>O tema atual é: {tema}</p>
        </div>
    );
}