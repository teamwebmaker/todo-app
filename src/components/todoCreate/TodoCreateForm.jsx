import { useState } from "react"

function TodoCreateForm(props) {
    const {formData, todoFromHandle, storeTodo} = props
    const [disabled, setDisabled] = useState(false)
    function modifyStoreTodo (e) {
        storeTodo(e)
        setDisabled(true)
    }
    return (
            <form onSubmit={modifyStoreTodo}>
                <div className="mb-3">
                    <input type="text" className="form-control" value={formData.todoTitle} name="todoTitle" onChange={todoFromHandle}/>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="todoStatus" id="low"  value="low" onChange={todoFromHandle}/>
                            <label className="btn btn-outline-primary" htmlFor="low">Low</label>

                            <input type="radio" className="btn-check" name="todoStatus" id="middle" value="middle" onChange={todoFromHandle}/>
                            <label className="btn btn-outline-primary" htmlFor="middle">Middle</label>

                            <input type="radio" className="btn-check" name="todoStatus" id="high" value="high" onChange={todoFromHandle}/>
                            <label className="btn btn-outline-primary" htmlFor="high">High</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" disabled={disabled}>Store Todo</button>
            </form>
    )
}
export default TodoCreateForm