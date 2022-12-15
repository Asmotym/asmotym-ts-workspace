import React, {ChangeEvent, HTMLInputTypeAttribute} from 'react'
import Styles from './Input.module.scss'
import clsx from 'clsx'

export type InputProps = {
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: HTMLInputTypeAttribute;
}

export type InputState = {
    $container?: React.RefObject<HTMLInputElement>;
    value: string;
}

export class Input extends React.Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);

        this.state = {
            $container: React.createRef<HTMLInputElement>(),
            value: '',
        }
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState((currentState: InputState) => {
            currentState.value = event.target.value;
            return currentState;
        })
    }

    render() {
        return (
            <input ref={this.state.$container}
                   type={this.props.type || 'text'}
                   className={clsx(this.props.className, Styles.Input)}
                   placeholder={this.props.placeholder}
                   disabled={this.props.disabled}
                   onChange={this.handleChange.bind(this)}
            ></input>
        );
    }
}