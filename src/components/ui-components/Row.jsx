const Row = ({ children, className }) => (
    <div className={`flex flex-wrap items-start ${className}`}>
        {children}
    </div>
)

export default Row