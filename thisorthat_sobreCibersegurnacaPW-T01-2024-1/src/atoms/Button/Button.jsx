export default function Button({ label, primary }) {
    return (
        primary ? <button className="btn btn-primary">{label}</button> : <button className="btn btn-secondary">{label}</button>
    );
}
