import React, {ComponentProps} from 'react';
import { InputBox } from './InputBox';
import {Story} from "@storybook/react/types-6-0";

// This default export determines where your story goes in the story list
export default {
   title: 'InputBox',
   component: InputBox,
};


const Template: Story<ComponentProps<typeof InputBox>> = (args) => (
   <InputBox {...args} />
);

export const Default = Template.bind({});
Default.args = {

};
