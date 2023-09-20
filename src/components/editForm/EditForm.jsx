

function EditForm(props) {
    const {title, changeTitleHandler, updateTodo} = props
    return (
        <form className="w-100" onSubmit={updateTodo}>
            <div className="row">
                <div className="col-md-10">
                    <input type="text"  value={title} className="form-control w-100 d-block" placeholder="Username" onChange={changeTitleHandler}/>
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-info" >
                        <i className="bi bi-tropical-storm"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}
export default EditForm