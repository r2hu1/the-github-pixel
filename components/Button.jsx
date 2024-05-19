export default function Button({ children,...props }) {
    return (
        <button className={`bg-white transition flex items-center gap-2 hover:bg-white/70 text-stone-950 text-sm font-medium py-2 px-4 rounded ${props.className}`} {...props}>
            {children}
        </button>
    );
}