import React, {ComponentProps} from 'react';
import { Input } from './Input';
import {Story} from "@storybook/react/types-6-0";

// This default export determines where your story goes in the story list
export default {
   title: 'Input',
   component: Input,
};


const Template: Story<ComponentProps<typeof Input>> = (args) => (
   <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {

};