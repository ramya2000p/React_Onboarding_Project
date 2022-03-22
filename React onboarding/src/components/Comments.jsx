function Comments({comments}) {
    return (
        <div>    
            <h4 className="font-bold py-2">{comments.email}</h4>
            <p className="pb-8">{comments.body}</p>
            <hr></hr>       
        </div>
    )
}

export default Comments