function Alert({ children, type }) {
    let className = 'w-full border rounded-lg px-6 py-4 text-center text-sm'

    if (type === 'success') {
        className += " border-green-600 bg-green-600 text-white"
    } else if (type === 'warning') {
        className += " border-orange-400 bg-orange-400 text-white"
    } else if (type === 'info') {
        className += " border-blue-500 bg-blue-500 text-white"
    } else if (type === 'dark') {
        className += " border-slate-800 bg-slate-800 text-white"
    } else if (type === 'light') {
        className += " border-gray-200 bg-gray-200 text-black"
    } else {
        className += " border-red-500 bg-red-500 text-white"
    }

    return (
        <div className={className}>
            <p>{children}</p>
        </div>
    )
}

export default Alert