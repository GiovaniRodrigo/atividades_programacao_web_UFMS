export default function Input({ type, label, placeholder, onChange }) {
    return (
        <>
            <label >{label}</label>
            <input
            onChange={onChange}
            style={{
                gap: "0"
            }}
                className="form-control"
                placeholder={placeholder}
                type={type}
                aria-describedby="basic-addon2" />
        </>
    )
}