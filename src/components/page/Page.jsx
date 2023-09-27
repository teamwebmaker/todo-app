function Page(props){
    const {page, currentPage, pagination} = props
    const classes = ["page-link"]
    let disabled = false
    if(page === currentPage){
        classes.push("bg-primary") 
        disabled = true
    } 
    return (
        <li className="page-item">
            <button className={classes.join(" ")} disabled={disabled} onClick={() => pagination(page)}>{page}</button>
        </li>
    )
}
export default Page