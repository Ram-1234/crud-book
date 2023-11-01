import React from 'react';

function Navbar(props) {
    const {fetcAllBook, view, onChangeHandler } = props;
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="ss">BOOKS</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="d-flex float-end" id="navbarSupportedContent">
                        <form className="d-flex float-end" role="search">
                            <input className="form-control me-2" onChange={(e)=>onChangeHandler(e)} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='d-flex'>
                    <button onClick={fetcAllBook} className="btn bg-success text-white" type="button"> {view ? "Form" :"All Books"}</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;