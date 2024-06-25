export default function Card({ content, backgroundColor }) {
    return (
        <div class="card" style={{ backgroundColor }}>
            <div class="card-body">
                {content}
            </div>
        </div >
    )
}