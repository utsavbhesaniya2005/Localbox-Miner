import { useEffect, useState } from "react";
import { getUsers } from "../../services/Helper";
import generateUniqueId from "generate-unique-id";
import ViewData from "../viewdata/ViewData";
import AddData from "../adddata/AddData";


const UserForm = () => {

    const [userInput, setUserInput] = useState({
        id : '',
        fname : '',
        dob : '', 
        add : '',
        email : '',
        des : '',
        dept : '',
        contact : '',
        city : ''
    });

    const [inputError, setInputError] = useState({});

    const [storage, setStorage] = useState(getUsers());

    const validation = () => {

        let obj = {};

        if(userInput.fname == ''){
            obj.fname = "Name Must Be Required...";
        }

        if(userInput.dob == ''){
            obj.dob = "Birth Date Must Be Required...";
        }

        if(userInput.add == ''){
            obj.add = "Address Must Be Required...";
        }

        if(userInput.email == ''){
            obj.email = "Email Must Be Required...";
        }

        if(userInput.des == ''){
            obj.des = "Designation Must Be Required...";
        }

        if(userInput.dept == ''){
            obj.dept = "Dept Must Be Required...";
        }
        
        if(userInput.contact == ''){
            obj.contact = "Contact Must Be Required...";
        }

        if(userInput.city == ''){
            obj.city = "City Must Be Required...";
        }

        setInputError(obj);

        if(Object.keys(obj).length > 0){
            return false;
        }else{
            return true;
        }
        
    }

    const handleInput = (e) => {
        setUserInput({...userInput,[e.target.name] : e.target.value});
    }

    const handleSelect = (selectId) => {
        console.log("Select Id",selectId);
    }

    const handleEdit = (updateId) => {
        
        let editRec = storage.find((rec) => rec.id == updateId)
        setUserInput(editRec);

        if(editRec){
            alert("Data Sended To Form.");
        }
    }

    const handleDelete = (deleteId) => {
        let deleteRec = storage.filter((rec) => rec.id != deleteId)
        setStorage(deleteRec);
    }

    const formSubmit = (e) => {

        e.preventDefault();

        if(validation()){

            if(userInput.id != ''){
                
                let updateRec = storage.map((rec) => {

                    if(userInput.id == rec.id){
                        return userInput;
                    }else{
                        return rec;
                    }
                })
                setStorage(updateRec);
                if(updateRec){
                    alert("Data Updated Successfully.");
                }else{
                    alert("Error Occured.");
                }
            }else{

                userInput.id = generateUniqueId({
                    length: 4,
                    useLetters: false
                });
                return setStorage([...storage, userInput]);
            }
            

            setUserInput({
                id: '',
                fname : '',
                dob : '',
                add : '',
                email : '',
                des : '',
                dept : '',
                contact : '',
                city : ''
            });
            setInputError({});
        }else{

            console.log("Form Not Submit");
        }
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(storage));
    }, [storage])
    

    return(
        <>
            <AddData formSubmit={formSubmit} handleInput={handleInput} inputError={inputError} userInput={userInput} />
            <ViewData storage={storage} handleEdit={handleEdit} handleDelete={handleDelete} handleSelect={handleSelect} />
        </>
    )

}
export default UserForm;