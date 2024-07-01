export default function Button({ label, icon, primary, onClick }) {



    return (
        primary ?
            <button className="btn btn-primary" onClick={onClick}>
                {label}
            </button>
            :
            <button className="btn btn-secondary" onClick={onClick}>
                <i className="bi bi-facebook"></i>
                {label}
            </button>
    );
}
