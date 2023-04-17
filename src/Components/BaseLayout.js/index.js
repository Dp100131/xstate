import React from "react";
import { useMachine } from '@xstate/react'
import { bookingMachine } from "../../Machines/bookingMachine";

function BaseLayout() {
    
    const [state, send] = useMachine(bookingMachine);

    console.log('nuestra maquina', state);
    
    return (
        <div>
            <h1>Hola</h1>
        </div>
    )
}

export {BaseLayout}