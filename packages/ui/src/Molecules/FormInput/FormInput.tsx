import React from 'react'
import Styles from './FormInput.module.scss'
import clsx from 'clsx'
import * as Atoms from '../../Atoms'

export type FormInputProps = {
    className?: string;
    label: Atoms.TextProps;
    input: Atoms.InputProps;
}

export type FormInputState = {
    $container: React.RefObject<HTMLDivElement>;
    $children: {
        label: React.RefObject<Atoms.Text>;
        input: React.RefObject<Atoms.Input>;
    };
}

export class FormInput extends React.Component<FormInputProps, FormInputState> {
    constructor(props: FormInputProps) {
        super(props);

        this.state = {
            $container: React.createRef<HTMLDivElement>(),
            $children: {
                label: React.createRef<Atoms.Text>(),
                input: React.createRef<Atoms.Input>(),
            }
        }
    }

    isEmpty() {
        const input: Atoms.Input | null = this.state.$children.input.current;

        if (!input) {
            return true;
        }

        return input.state.value === '';
    }

    render() {
        return (
            <div ref={this.state.$container}
                 className={clsx(this.props.className, Styles.FormInput)}>
                <Atoms.Text ref={this.state.$children.label} {...this.props.label} />
                <Atoms.Input ref={this.state.$children.input} {...this.props.input} />
            </div>
        );
    }
}