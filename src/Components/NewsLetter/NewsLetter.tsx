const NewsLetter = () => {
    return (
        <div className="container-fluid p-0">
            <div className="app-theme-bg shadow-lg p-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center mb-5'>Enter detail to get the updates</h1>
                        <div className="input-group mb-3 rounded-pill">
                            <input type="text" className="form-control" placeholder="Enter Email address" />
                                <button className="btn btn-csPrimary" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter