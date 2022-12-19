import React, {SyntheticEvent} from 'react'
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

export type LoginState = {
    $container: React.RefObject<HTMLDivElement>;
    returnToHome: boolean;
}

export class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);

        this.state = {
            $container: React.createRef<HTMLDivElement>(),
            returnToHome: false,
        }
    }

    handleSubmit() {
        this.setState({
            returnToHome: true,
        })
    }

    render() {
        return (
            <div ref={this.state.$container}
                 className={clsx(this.props.className, Styles.Login)}
            >
                <Organisms.ConnectionForm onSubmit={this.handleSubmit.bind(this)} />
                {this.state.returnToHome === true && (
                    <Navigate to={'/'} />
                )}
            </div>
        )
    }
}