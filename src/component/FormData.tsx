import React, { useState } from "react"
import DisplayForm from "./DisplayForm";
interface Address {
    "addresss 1": string;
    "addresss 2": string;
    "city": string;
    "state": string;
    "zip": string;

}

interface Profile {
    email: string;
    password: string;
    address: Address;
    "checkme": boolean;
}
function FormData() {
    const intialAddress: Address = {
        "addresss 1": "",
        "addresss 2": "",
        "city": "",
        "state": "",
        "zip": "",
    }

    const intialProfile: Profile = {
        email: "",
        password: "",
        address: intialAddress,
        checkme: false
    }
    const [state, setState] = useState(intialProfile)

    var intialDataArr: Profile[] = [];

    var [dataArr, setDataArr] = useState(intialDataArr)

    function handleEmail(e: any) {
        let emailValue = e.target.value;
        setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState.email = emailValue;
            return newState;
        });
    }


    function handlePassword(e: any) {
        let passwordValue = e.target.value;
        setState(prevState => ({
            email: prevState.email,
            password: passwordValue,
            address: prevState.address,
            checkme: prevState.checkme

        }))
    }
    function handleAddress1(e: any) {
        let address1Value = e.target.value;
        setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState.address["addresss 1"] = address1Value;
            return newState;
        });
    }
    function handleAddress2(e: any) {
        let address2Value = e.target.value;
        setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState.address["addresss 2"] = address2Value;
            return newState;
        });
    }

    function handleCity(e: any) {
        let cityValue = e.target.value;
        setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState.address.city = cityValue;
            return newState;
        });
    }

    function handleState(e: any) {
        let stateValue = e.target.value;
        setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState.address.state = stateValue;
            return newState;
        });
    }

    function handleZip(e: any) {
        let zipValue = e.target.value;
        setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState.address.zip = zipValue;
            return newState;
        });
    }

    function handleCheckme(e: any) {
        console.log(e.target.checked)
        let checkMeValue = e.target.checked;
        setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState.checkme = checkMeValue;
            return newState;
        });
    }

    function handleSubmit() {
        setDataArr(prevDataArrState => {
            let newDataArrState = [...prevDataArrState, state]
            return newDataArrState;
        })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" onChange={handleEmail} value={state.email} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" onChange={handlePassword} value={state.password} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" onChange={handleAddress1} value={state.address["addresss 1"]} placeholder="1234 Main St" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" onChange={handleAddress2} value={state.address["addresss 2"]} placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" onChange={handleCity} value={state.address.city} />                    </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <input type="text" className="form-control" id="inputState" onChange={handleState} value={state.address.state} />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" onChange={handleZip} value={state.address.zip} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onChange={handleCheckme} checked={state.checkme} />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                        </label>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmit}>Sign in</button>
                </div>
                <div className="col-sm">
                    <DisplayForm dataArr={dataArr} />
                </div>

            </div>
        </div>
    )
}
export default FormData