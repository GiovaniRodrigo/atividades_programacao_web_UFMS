export default function Input({ type, label, placeholder }) {
    return (
        <>
            <label >{label}</label>
            <input
            style={{
                gap: "0"
            }}
                className="form-control"
                placeholder={placeholder}
                type="text"
                aria-describedby="basic-addon2" />
        </>
    )
}