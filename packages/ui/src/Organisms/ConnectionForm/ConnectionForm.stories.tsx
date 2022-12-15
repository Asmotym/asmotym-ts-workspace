import {ConnectionForm} from './ConnectionForm'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: 'Organisms/ConnectionForm',
    component: ConnectionForm,
    argTypes: {
        onSubmit: { action: 'onSubmit' },
        onClick: { action: 'onClick' },
    },
} as ComponentMeta<typeof ConnectionForm>

const Template: ComponentStory<typeof ConnectionForm> = (args) => <ConnectionForm {...args} />;

export const Default = Template.bind({});
Default.args = {};