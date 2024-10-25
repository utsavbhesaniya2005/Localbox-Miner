const AddData = ({formSubmit, handleInput, userInput, inputError}) => {
    return(
        <>  
            <h1 className="mb-5">Employee Management CRUD</h1>
            <div className="container">
                <form onSubmit={formSubmit} className="row g-3">
                    <div className="col-12">
                        <input type="text" className="form-control" value={userInput.id} hidden />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label d-flex">Name :</label>
                        <input type="text" className="form-control" placeholder="Enter Your Full Name" name="fname" onChange={handleInput} value={userInput.fname} />
                        {inputError.fname ? <span>{inputError.fname}</span> : ''}
                        <br/><br />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label d-flex">Age :</label>
                        <input type="number" className="form-control" placeholder="Enter Your Age" name="age" onChange={handleInput} value={userInput.age} />
                        {inputError.age ? <span>{inputError.age}</span> : ''}
                        <br/><br />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label d-flex">DOB :</label>
                        <input type="date" className="form-control" placeholder="Enter Birth Date" name="dob" onChange={handleInput} value={userInput.dob} />
                        {inputError.dob ? <span>{inputError.dob}</span> : ''}
                        <br/><br />
                    </div>
                    <div className="col-12">
                        <label className="form-label d-flex">Address :</label>
                        <textarea rows="5" cols="5" type="text" className="form-control" placeholder="Enter Address" name="add" onChange={handleInput} value={userInput.add} />
                        {inputError.add ? <span>{inputError.add}</span> : ''}
                        <br/><br />
                    </div>

                    <div className="col-7">
                        <label className="form-label d-flex">Email :</label>
                        <input type="text" className="form-control" placeholder="Enter Your Email" name="email" onChange={handleInput} value={userInput.email} />
                        {inputError.email ? <span>{inputError.email}</span> : ''}
                        <br /><br />
                    </div>

                    <div className="col-5">
                        <label className="form-label d-flex">Designation :</label>
                        <input type="text" className="form-control" placeholder="Enter Your Designation" name="des" onChange={handleInput} value={userInput.des} />
                        {inputError.des ? <span>{inputError.des}</span> : ''}
                        <br /><br />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label d-flex">Department :</label>
                        <input type="text" className="form-control"  placeholder="Enter Your Department" name="dept" onChange={handleInput} value={userInput.dept} />
                        {inputError.dept ? <span>{inputError.dept}</span> : ''}
                        <br />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label d-flex">Contact :</label>
                        <input type="text" className="form-control" placeholder="Enter Your Contact No" name="contact" onChange={handleInput} value={userInput.contact} />
                        {inputError.contact ? <span>{inputError.contact}</span> : ''}
                        <br />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label d-flex">City :</label>
                        <input type="text" className="form-control" placeholder="Enter City" name="city" onChange={handleInput}  value={userInput.city} />
                        {inputError.city ? <span>{inputError.city}</span> : ''}
                        <br /><br /><br />
                    </div>

                    <input type="submit" className="btn btn-primary" value={'Submit'}/>
                </form>
            </div>
        </>
    )
}
export default AddData;