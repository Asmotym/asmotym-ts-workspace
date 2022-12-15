import {Button} from './Button'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Click me!',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    text: 'Disabled button',
    disabled: true,
};