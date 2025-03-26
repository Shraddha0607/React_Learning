import React from 'react'
import TabButton from '../TabButton'
import "./Examples.css"
import Example from './Example'
import { EXAMPLES } from '../../data'
import { useState } from 'react'
import Section from '../Wrapper/Section'
import Tabs from '../Wrapper/Tabs'

function Examples(props) {
    const [tabContent, setTabContent] = useState();
    const [isTabSelected, setIsTabSelected] = useState(false);

    const onTabHandler = (title) => {
        setIsTabSelected(true);
        setTabContent(title);
    }

    let content = <p>Nothing selected</p>;

    if (tabContent) {
        content = <Example
            details={EXAMPLES[tabContent]} />
    }

    return (
        <Section id="examples" heading="Examples">
            <Tabs
             menu={
                <>
                <TabButton
                    onClick={() => onTabHandler("components")}
                    isTabSelected={isTabSelected && tabContent === 'components'}
                >Component</TabButton>
                <TabButton onClick={() => onTabHandler("jsx")}
                    isTabSelected={isTabSelected && tabContent === 'jsx'}
                >JSX</TabButton>
                <TabButton onClick={() => onTabHandler("props")}
                    isTabSelected={isTabSelected && tabContent === 'props'}
                >Props</TabButton>
                <TabButton onClick={() => onTabHandler("state")}
                    isTabSelected={isTabSelected && tabContent === 'state'}
                >State</TabButton>
            </>
            }>
                {content}</Tabs>

        </Section>
    )
}

export default Examples
