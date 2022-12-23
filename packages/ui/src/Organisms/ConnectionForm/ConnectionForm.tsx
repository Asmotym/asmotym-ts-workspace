import React from 'react'
import Styles from './ConnectionForm.module.scss'
import clsx from 'clsx'
import * as Molecules from '../../Molecules'
import * as Atoms from '../../Atoms'
import {FormInputRefs} from '../../Molecules';

export type ConnectionFormProps = {
    className?: string;
    onSubmit?: (event: React.SyntheticEvent) => void;
    onClick?: (event: React.SyntheticEvent) => void;
}

export type ConnectionFormState = {
    $container: React.RefObject<HTMLFormElement>;
    $children: {
        login: any;
        password: any;
        sendButton: any;
    };
}

export function ConnectionForm(props: ConnectionFormProps) {
    const refs = {
        login: React.useRef<FormInputRefs>(null),
        password: React.useRef<FormInputRefs>(null),
    }

    function handleSubmit(event: React.SyntheticEvent): void {
        event.preventDefault();

        const isFirstNameEmpty = refs.login.current?.isEmpty();
        const isLastNameEmpty = refs.login.current?.isEmpty();

        if (isFirstNameEmpty || isLastNameEmpty) {
            return;
        }

        if (props.onSubmit && typeof props.onSubmit === 'function') {
            props.onSubmit(event);
        }
    }

    function handleSubmitClick(event: React.SyntheticEvent): void {
        if (props.onClick && typeof props.onClick === 'function') {
            props.onClick(event);
        }
    }


    return (
        <form className={clsx(props.className, Styles.ConnexionForm)}
              onSubmit={handleSubmit}
        >
            <Molecules.FormInput ref={refs.login} label={{ text: "Login" }} input={{}} />
            <Molecules.FormInput ref={refs.password} label={{ text: "Password" }} input={{ type: 'password' }} />
            <Atoms.Button text={"Connect"} onClick={handleSubmitClick} />
        </form>
    )
}
