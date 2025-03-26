import React from 'react'
import { CORE_CONCEPTS } from '../../data'
import CoreConcept from './CoreConcept'
import Section from '../Wrapper/Section'
function CoreConcepts() {
    return (
        <Section id="core-concepts" heading="Core Concepts">
            <ul>
                <CoreConcept
                    title={CORE_CONCEPTS[0].title}
                    description={CORE_CONCEPTS[0].description}
                    image={CORE_CONCEPTS[0].image} />
                <CoreConcept {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
        </Section>
    )
}

export default CoreConcepts
