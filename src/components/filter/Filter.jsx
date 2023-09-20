
function Filter() {
    return (
        <select className="form-select my-4" aria-label="Default select example">
            <option value="all">All Todos</option>
            <option value="complated">Complated Todos</option>
            <option value="running">Running Todos</option>
        </select>
    )
}
export default Filter