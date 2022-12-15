import React from 'react'
import Styles from './Button.module.scss'
import clsx from 'clsx'
import {SyntheticEvent} from "react";

export type ButtonProps = {
    className?: string;
    text: string;
    disabled?: boolean;
    onClick?: (event: SyntheticEvent) => void;
}

export type ButtonState = {
    $container?: React.RefObject<HTMLButtonElement>;
}

export class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);

        this.state = {
            $container: React.createRef<HTMLButtonElement>(),
        }
    }

    render() {
        return (
            <button ref={this.state.$container}
                    className={clsx(this.props.className, Styles.Button)}
                    disabled={this.props.disabled}
                    onClick={this.props.onClick}
            >
                {this.props.text}
            </button>
        )
    }
}