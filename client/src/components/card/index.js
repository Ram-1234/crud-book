import React from 'react';

function Card(props) {
    const {title, auther, summary, _id, deleteHandler, viewBook,updateHandler}=props;
    
    return (
        <div className="card m-2 bg-dark text-white" id={_id} style={{ width: "18rem" }}>
         <i className='bookid float-end'style={{fontSize:"8px"}} >Id: {_id}</i><br/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-grey">{auther}</h6>
                <p className="card-text">{summary}</p>
                <button onClick={()=> deleteHandler(_id)} className="btn bg-danger text-white m-1" type="button">Delete</button>
                <button onClick={()=> viewBook(props)} className="btn bg-primary text-white m-1" type="button">View</button>
                <button onClick={()=> updateHandler({_id,summary,auther,title})} className="btn bg-warning text-white" type="button">Update</button>
                {/* <button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">View Book</button> */}
            </div>
        </div>
    )
}

export default Card;