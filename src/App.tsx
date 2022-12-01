import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

type PageTitleType = {
    title: string
}

function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'my ff'}/>

            <Rating value={3}/>
            <Accordion title={'menu 1'}/>
            <Accordion title={'menu 2'}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    )
}

export function PageTitle(props: PageTitleType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
