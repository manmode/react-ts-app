function ListItem({
    children
}) {
    return (
        <div className="p-1.5 cursor-pointer hover:bg-sky-200 hover:font-bold">
            {children}
        </div>
    )
}
export default ListItem;