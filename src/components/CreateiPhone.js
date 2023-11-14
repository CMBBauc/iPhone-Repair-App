import { useState } from "react"
import axios from "axios";
import './CreateiPhone.css'

export default function CreateiPhone(){
    const [iphone, setiPhone] = useState({
        id: "",
        name: "",
        model: "",
        configuration: "",
        imgUrl: "",
    });


    const handleChange = (e) => {
        const value = e.target.value;
        setiPhone({...iphone, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {

        axios.post("http://localhost:8080/api/createIPhone", iphone)
        .then((response) => {
            console.log(response.status, response.data);
        })
        .catch((error) => {
            console.error('Error:', error.response?.status, error.response?.data);
        });
    };

    const mobileHandleClick = () => {
        document.getElementById("form").style.display = "flex";
        document.getElementById("plus").style.display = "none";
    }

    return (
        <>
        <div className="form-container">
            <div id="plus" onClick={mobileHandleClick} className="mobile-form-container">
                <div className="mobile-create-text">+</div>
            </div>
            <form id="form" className="form" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="Id"> ID </label>
                <input
                    required
                    className="input-field"
                    id="Id"
                    type = "text"
                    name = "id"
                    value={iphone.id}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="Name"> Name </label>
                <input
                    required
                    id="Name"
                    type = "text"
                    name = "name"
                    value={iphone.name}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="Model"> Model </label>
                <input
                    required
                    id="Model"
                    type="text"
                    name="model"
                    value={iphone.model}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="Configuration"> Configuration </label>
                <input
                    required
                    id="Configuration"
                    type="text"
                    name="configuration"
                    value={iphone.configuration}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="ImgUrl"> imgUrl </label>
                <input
                    required
                    id="ImgUrl"
                    type="text"
                    name="imgUrl"
                    value={iphone.imgUrl}
                    onChange={(e) => handleChange(e)}
                />
                <button
                    className="create-iphone-button"
                    type="submit">
                    + Create iPhone
                </button>
            </form>
        </div>
        </>
    )
}

