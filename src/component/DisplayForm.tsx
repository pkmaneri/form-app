import React from "react"
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
interface FormProps{
    dataArr: Profile[];
}
function DisplayForm(props : FormProps){

    return (
        <table className="table">
        <thead>
            <tr>
                <td>
                    Email
        </td>
                <td>
                    Password
        </td>
                <td>
                    Address 1
        </td>
                <td>
                    Address 2
        </td>
                <td>
                    State
        </td>
                <td>
                    City
        </td>
                <td>
                    Zip
        </td>
                <td>
                    Check me out
        </td>
            </tr>
        </thead>
        <tbody>
            {props.dataArr.map((profile: Profile) => {
                return (

                    <tr>
                        <td>
                            {profile.email}
                        </td>
                        <td>
                            {profile.password}
                        </td>
                        <td>
                            {profile.address["addresss 1"]}
                        </td>
                        <td>
                            {profile.address["addresss 2"]}
                        </td>
                        <td>
                            {profile.address.state}
                        </td>
                        <td>
                            {profile.address.city}
                        </td>
                        <td>
                            {profile.address.zip}
                        </td>
                        <td>
                            {profile.checkme + ""}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>

    )
}

export default DisplayForm