import type {Meta, StoryObj} from '@storybook/vue3';

import LoginForm from './LoginForm.vue';

const meta = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Organisms/LoginForm',
    component: LoginForm,
    render: (args: any) => ({
        components: {LoginForm},
        setup() {
            return {args};
        },
        template: '<LoginForm />',
    }),
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};