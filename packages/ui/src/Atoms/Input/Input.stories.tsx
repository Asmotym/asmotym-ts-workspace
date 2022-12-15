import {Input} from './Input'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: 'Atoms/Input',
    component: Input,
    argTypes: {}
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Default placeholder...',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: 'Disabled input...',
    disabled: true,
};