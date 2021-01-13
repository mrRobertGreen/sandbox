import React, {ComponentProps} from 'react';
import { Label } from './Label';
import {Story} from "@storybook/react/types-6-0";

// This default export determines where your story goes in the story list
export default {
   title: 'Label',
   component: Label,
};


const Template: Story<ComponentProps<typeof Label>> = (args) => (
   <Label {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
};