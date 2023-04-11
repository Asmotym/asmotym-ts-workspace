import type { Meta, StoryObj } from "@storybook/vue3";

import Input from './Input.vue';

const meta = {
    title: 'Atoms/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['default', 'large'] },
        onInput: { action: 'clicked' },
    },
    args: { disabled: false },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'My input...',
    },
}

export const Large: Story = {
    args: {
        placeholder: 'Large input...',
        size: 'large'
    }
}