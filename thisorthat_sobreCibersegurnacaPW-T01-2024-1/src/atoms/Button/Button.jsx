export default function Button({ label, icon, primary, onClick }) {

    console.log(onClick)

    return (
        primary ?
            <button className="btn btn-primary" onClick={onClick}>
                {label}
            </button>
            :
            <button className="btn btn-secondary" >
                <i className="bi bi-facebook"></i>
                {label}
            </button>
    );
}
