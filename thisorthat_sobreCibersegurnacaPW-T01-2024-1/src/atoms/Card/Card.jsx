export default function Card({ content, backgroundColor }) {
    return (
        <div className="card" style={{backgroundColor: 'white'}}>
            <div className="card-body">
                {content}
            </div>
        </div >
    )
}