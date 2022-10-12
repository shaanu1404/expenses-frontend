const Column = ({ children, className = "", size }) => {
    let width;
    switch (size) {
        case 1: width = "w-1/12"; break;
        case 2: width = "w-2/12"; break;
        case 3: width = "w-3/12"; break;
        case 4: width = "w-4/12"; break;
        case 5: width = "w-5/12"; break;
        case 6: width = "w-6/12"; break;
        case 7: width = "w-7/12"; break;
        case 8: width = "w-8/12"; break;
        case 9: width = "w-9/12"; break;
        case 10: width = "w-10/12"; break;
        case 11: width = "w-11/12"; break;
        default: width = "w-full"; break;
    }

    return (
        <div className={`${width} flex-shrink-0 ${className}`}>
            {children}
        </div>
    )
}

export default Column