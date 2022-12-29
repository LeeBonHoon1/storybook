import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Test = Template.bind({});

Test.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};
