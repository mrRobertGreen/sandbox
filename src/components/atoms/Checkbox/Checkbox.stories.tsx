import React, {ComponentProps} from 'react';
import { Checkbox } from './Checkbox';
import {Story} from "@storybook/react/types-6-0";

// This default export determines where your story goes in the story list
export default {
   title: 'Checkbox',
   component: Checkbox,
};


const Template: Story<ComponentProps<typeof Checkbox>> = (args) => (
   <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {

};