import {Text} from './Text'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: 'Atoms/Text',
    component: Text,
    argTypes: {}
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Hello World!'
};