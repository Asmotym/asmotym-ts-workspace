import React, {SyntheticEvent} from 'react'
import Styles from './ConnectionForm.module.scss'
import clsx from 'clsx'
import * as Molecules from '../../Molecules'
import * as Atoms from '../../Atoms'

export type ConnectionFormProps = {
    className?: string;
    onSubmit?: (event: SyntheticEvent) => void;
    onClick?: (event: SyntheticEvent) => void;
}

export type ConnectionFormState = {
    $container: React.RefObject<HTMLFormElement>;
    $children: {
        login: React.RefObject<Molecules.FormInput>;
        password: React.RefObject<Molecules.FormInput>;
        sendButton: React.RefObject<Atoms.Button>;
    };
}

export class ConnectionForm extends React.Component<ConnectionFormProps, ConnectionFormState> {
    constructor(props: ConnectionFormProps) {
        super(props);

        this.state = {
            $container: React.createRef<HTMLFormElement>(),
            $children: {
                login: React.createRef<Molecules.FormInput>(),
                password: React.createRef<Molecules.FormInput>(),
                sendButton: React.createRef<Atoms.Button>(),
            },
        }
    }

    handleSubmit(event: SyntheticEvent): void {
        event.preventDefault();

        const isFirstNameEmpty = this.state.$children.login.current?.isEmpty();
        const isLastNameEmpty = this.state.$children.password.current?.isEmpty();

        if (isFirstNameEmpty || isLastNameEmpty) {
            return;
        }

        if (this.props.onSubmit && typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(event);
        }
    }

    handleSubmitClick(event: SyntheticEvent): void {
        if (this.props.onClick && typeof this.props.onClick === 'function') {
            this.props.onClick(event);
        }
    }

    render() {
        return (
            <form ref={this.state.$container}
                  className={clsx(this.props.className, Styles.ConnexionForm)}
                  onSubmit={this.handleSubmit.bind(this)}
            >
                <Molecules.FormInput ref={this.state.$children.login} label={{ text: "Login" }} input={{}} />
                <Molecules.FormInput ref={this.state.$children.password} label={{ text: "Password" }} input={{ type: 'password' }} />
                <Atoms.Button ref={this.state.$children.sendButton} text={"Connect"} onClick={this.handleSubmitClick.bind(this)} />
            </form>
        );
    }
}