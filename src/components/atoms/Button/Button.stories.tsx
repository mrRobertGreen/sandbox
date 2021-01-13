import React, {ComponentProps} from 'react';
import { Button } from './Button';
import {Story} from "@storybook/react/types-6-0";

// This default export determines where your story goes in the story list
export default {
   title: 'Button',
   component: Button,
};


const Template: Story<ComponentProps<typeof Button>> = (args) => (
   <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
   mod: "default"
};
export const Primary = Template.bind({});
Primary.args = {
   mod: "primary"
};
export const Secondary = Template.bind({});
Secondary.args = {
   mod: "secondary"
};