import React, { useState } from "react";
import { GlobalContext } from './GlobalContext'


export default function GlobalState(props) {
    const [adiciona, setAdiciona] = useState([])

    const values = {
        adiciona,
        setAdiciona
    }

    const Provider = GlobalContext.Provider

    return <Provider value={values}>{props.children}</Provider>
}