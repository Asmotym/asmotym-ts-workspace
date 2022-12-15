import {FormInput} from './FormInput'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: 'Molecules/FormInput',
    component: FormInput,
    argTypes: {}
} as ComponentMeta<typeof FormInput>

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: {
        text: 'First name',
    },
};