const ViewData = ({storage, handleEdit, handleDelete, handleSelect}) => {

    return(
        <>
            <h1 className="text-center my-5">View Employee</h1>
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
                                                <h5 className="card-title">{data.fname.toUpperCase()}</h5>
                                                <p className="card-text">{data.des}</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><b>Emp Id :</b> {data.id}</li>
                                                {/* <li className="list-group-item"><b>Age :</b> {new Intl.DateTimeFormat("en-GB", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "2-digit"
                                                }).format(new Date(data.dob))}</li> */}
                                                <li className="list-group-item"><b>Age : </b>{data.age}</li>
                                                <li className="list-group-item"><b>Phone No. :</b> {data.contact}</li>
                                                <li className="list-group-item"><b>Email :</b> {data.email}</li>
                                            </ul>
                                            <div className="card-body address1">
                                                <p className="address"><b>City :</b> {data.city}</p>
                                            </div>
                                            <div className="card-body action">
                                                <hr />
                                                <button type="submit" className="btn btn-success" onClick={() => handleSelect(data.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                                                </button>
                                                <button type="submit" className="btn btn-primary mx-3 my-2" onClick={() => handleEdit(data.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/></svg>
                                                </button>
                                                <button type="submit" className="btn btn-danger" onClick={() => handleDelete(data.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
                                                </button>
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