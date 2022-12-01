import React from "react";

type AccordionType = {
    title: string
}

export function Accordion(props: AccordionType) {
    return (
        <>
            <AccordionTitle title={props.title}/>
            <AccordionBody />
        </>
    )
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <>
            {props.title}
            <h3>Menu</h3>
        </>
    )
}

function AccordionBody() {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}


