import { createContext, useContext, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Modal from '../components/modal'

const ModalContext = createContext()

export const useModal = () => useContext(ModalContext)

export const ModalProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const [state, setState] = useState({
        size: "",
        title: "",
        closeWithBackdrop: true,
        body: <></>,
        footer: <></>
    })

    const showModal = (modalState) => {
        setState(modalState)
        setShow(true)
    }

    const handleClose = (cb) => {
        if (cb === "function") cb()
        setShow(false)
    }

    return (
        <ModalContext.Provider value={{ showModal, close: handleClose }}>
            {children}
            <AnimatePresence>
                {show && <Modal {...state} onClose={handleClose} />}
            </AnimatePresence>
        </ModalContext.Provider>
    )
}