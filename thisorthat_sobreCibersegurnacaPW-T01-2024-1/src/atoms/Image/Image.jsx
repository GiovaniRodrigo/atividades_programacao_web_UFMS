

export default function Image ({source, width, height, alt}) {

    return (
        <>
            <img src={source} alt={alt} width={width} height={height} className='rounded-circle'/>
        </>
    )
}