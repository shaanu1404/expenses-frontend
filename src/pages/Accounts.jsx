import React from 'react'
import { useModal } from '../contexts/modalContext'

function Accounts() {
    const {showModal} = useModal()

    function handleShowModal () {
        showModal({
            title: "Add new account",
            size: "sm",
            body: <AccountForm />,
            footer: <p>Fill this form to add new account.</p>
        })
    }

    return (
        <div>
            <h1>Accounts</h1>
            <button onClick={handleShowModal}>show modal</button>
        </div>
    )
}

function AccountForm () {
    return (
        <div>
            <label htmlFor="">Account name</label>
            <input type="text" />
        </div>
    )    
}

export default Accounts