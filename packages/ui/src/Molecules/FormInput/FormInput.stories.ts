import type {Meta, StoryObj} from '@storybook/vue3';

import FormInput from './FormInput.vue';

const meta = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Molecules/FormInput',
    component: FormInput,
    render: (args: any) => ({
        components: {FormInput},
        setup() {
            return {args};
        },
        template: '<FormInput :atoms="args.atoms"/>',
    }),
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
    tags: ['autodocs'],
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        atoms: {
            label: {
                text: 'Input text',
            },
            input: {
                placeholder: 'Input placeholder'
            },
        }
    },
};