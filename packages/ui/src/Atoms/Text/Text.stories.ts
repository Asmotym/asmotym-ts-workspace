import type {Meta, StoryObj} from '@storybook/vue3';

import Text from './Text.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
    title: 'Atoms/Text',
    component: Text,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
    tags: ['autodocs'],
    argTypes: {},
    args: {}, // default value
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        text: 'Toast text',
    },
};