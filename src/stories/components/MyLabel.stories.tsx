import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Mylabel } from "../../components/MyLabel";



export default {
    title: 'UI/MyLabel',
    component: Mylabel,
    argTypes:{
        size:{control:'select'},
        color:{control:'select'},
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof Mylabel>

const Template: ComponentStory<typeof Mylabel> = (args)=> <Mylabel {...args}/>

export const Basic = Template.bind({});
Basic.args={
    size:'normal',
    allCaps: false
}
export const AllCaps = Template.bind({});
AllCaps.args={
    size:'normal',
    allCaps: true
}

export const Primary = Template.bind({});
Primary.args={
    size:'normal',
    color: 'text-primary'
}
export const Secundary = Template.bind({});
Secundary.args={
    size:'normal',
    color: 'text-secondary'
}
export const Tertiary = Template.bind({});
Tertiary.args={
    size:'normal',
    color: 'text-tertiary'   
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args={
    size:'h1',
    fontColor:'#9ec7d1'
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args={
    size:'h1',
    fontColor:'#130e0e',

}