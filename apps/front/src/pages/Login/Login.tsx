import React, {useState} from 'react'
import Styles from './Login.module.scss'
import clsx from 'clsx'
import {
    Organisms
} from '@asmotym-ts-workspace/ui';
import {
    Navigate
} from 'react-router-dom'

export type LoginProps = {
    className?: string;
}

export type LoginState = {}

export function Login(props: LoginProps) {
    const [returnToHome, setReturnToHome] = useState(false)

    return (
        <div className={clsx(props.className, Styles.Login)}
        >
            <Organisms.ConnectionForm onSubmit={() => setReturnToHome(true)} />
            {returnToHome && (
                <Navigate to={'/'} />
            )}
        </div>
    )
}
