function Filter(props) {
    const {filtered, disabled} = props;
    return (
        <select className="form-select my-4" disabled={disabled} aria-label="select" onChange={filtered}>
            <option value="all">All Todos</option>
            <option value="completed">Completed Todos</option>
            <option value="running">Running Todos</option>
        </select>
    )
}
export default Filter