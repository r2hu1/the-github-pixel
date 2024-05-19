export default function PixelBox({ ...props }) {
    return (
        <div className="h-10 hover:scale-105 transition cursor-pointer w-10 max-h-10 max-w-10 border border-stone-600 rounded">
            {props.src ? (
                <a target="_blank" href={props.src.toString().replace(".png", "")}>
                    <img src={props.src} />
                </a>
            ) : (
                <img src={props.src} />
            )}
        </div>
    )
}