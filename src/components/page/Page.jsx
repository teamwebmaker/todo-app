function Page(props){
    const {page, currentPage, paginate} = props;
    const pageClasses = ["page-link"] 
    if(currentPage === page) pageClasses.push("bg-primary")
    return (
        <li className="page-item">
            <button className={pageClasses.join(" ")} onClick={() => paginate(page)}>{page}</button>
        </li>
    )
}
export default Page