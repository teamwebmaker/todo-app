import {useState} from 'react'
import {useParams} from "react-router-dom"
import TodoEditForm from "../../components/todoEditForm"
import Alert from "../../components/alert"
import Navigation from "../../layouts/Navigation"
function TodoEdit () {
    const {id} = useParams()
    const [alertProps, setAlertProps] = useState(null)
    return (
        <section className="container-fluid">
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                {alertProps ? <Alert {...alertProps}> {alertProps.message}</Alert> : null}
                
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <TodoEditForm id={id} setAlertProps={setAlertProps}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TodoEdit