import React from 'react'
import ContextApi from './CreateContext'

const useContextApi = (props) => {
    const data = [
        {
            name: "hasnain",
            title: "hasnain is a frontend developr"
        },
        {
            name: "Tofail",
            title: "hasnain is a frontend developr"
        },
        {
            name: "Ali",
            title: "hasnain is a frontend developr"
        }
    ]
    return <ContextApi.Provider value={data}>
        {props.children}
    </ContextApi.Provider>
}

export default useContextApi
