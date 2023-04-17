import React from "react";
import { useMachine } from '@xstate/react'
import { bookingMachine } from "../../Machines/bookingMachine";

function BaseLayout() {
    
    const [state, send] = useMachine(bookingMachine);

    console.log('nuestra maquina', state);
    console.log('initial', state.matches('initial'));
    console.log('tickets', state.matches('tickets'));
    console.log('finish', state.can('finish'));
    
    return (
        <div>
            <h1>Hola</h1>
        </div>
    )
}

export {BaseLayout}