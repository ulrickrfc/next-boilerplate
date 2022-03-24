import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default value for title component stories',
    description: 'this is the default description for the Main component'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
//subscribe the default args
Basic.args = {
  title: 'Basic args',
  description: ' this is a basic ar'
}

export const Default: Story = (args) => <Main {...args} />

//default valaues for the Default Storie
// Default.args = {
//   title: '123',
//   description: '12412'
// }
