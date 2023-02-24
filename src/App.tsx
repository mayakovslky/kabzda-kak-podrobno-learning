import React from 'react';
import './App.css';
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    return (
        <div>

            <OnOff />

            <UncontrolledAccordion title={'Menu 1'}/>
            <UncontrolledAccordion title={'Menu 2'}/>

            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
        </div>
    )
}

export default App;
