const ViewData = ({storage, handleEdit, handleDelete, handleSelect}) => {

    return(
        <>
            <h1 className="text-center my-5">View Data</h1>
            {/* <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Department</th>
                            <th scope="col">Contact</th>
                            <th scope="col">City</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        storage.map((data) => {
                            return(
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{data.fname}</td>
                                            <td>{data.dob}</td>
                                            <td>{data.add}</td>
                                            <td>{data.email}</td>
                                            <td>{data.des}</td>
                                            <td>{data.dept}</td>
                                            <td>{data.contact}</td>
                                            <td>{data.city}</td>
                                            <td><button type="submit" className="btn btn-success" onClick={() => handleSelect(data.id)}>Select</button>
                                                <button type="submit" className="btn btn-primary mx-3 my-2" onClick={() => handleEdit(data.id)}>Edit</button>
                                                <button type="submit" className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    }
                </table>
            </div> */}

            <div className="container">
                <div className="row">
                    {
                        storage.map((data) => {
                            return(
                                <>
                                    <div className="col-4">
                                        <div className="card" style={{width: "100%"}}>
                                            <img src="../src/assets/images/emp_img.png" className="card-img-top" alt="Emp Image" />
                                            <div className="card-body">
                                                <h4 className="card-title">{data.fname.toUpperCase()}</h4>
                                                <p className="card-text">{data.des}</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><b>Emp Id :</b> {data.id}</li>
                                                <li className="list-group-item"><b>DOB :</b> {new Intl.DateTimeFormat("en-GB", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "2-digit"
                                                }).format(data.firstSale)}</li>
                                                <li className="list-group-item"><b>Phone No. :</b> {data.contact}</li>
                                                <li className="list-group-item"><b>Email :</b> {data.email}</li>
                                            </ul>
                                            <div className="card-body">
                                                <p className="address"><b>Address :</b> {data.add}</p>
                                            </div>
                                            <div className="card-body action">
                                                <hr />
                                                <button type="submit" className="btn btn-success" onClick={() => handleSelect(data.id)}>Select</button>
                                                <button type="submit" className="btn btn-primary mx-3 my-2" onClick={() => handleEdit(data.id)}>Edit</button>
                                                <button type="submit" className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )

}
export default ViewData;