import React from "react";

type RatingType = {
    value: number
}

type StarType = {
    selected: boolean
}

export function Rating(props: RatingType) {

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

export function Star(props: StarType) {

    if (props.selected) {
    return (
        <>
            <span><b>star </b></span>
        </>
    )
}
    return (
        <>
            <span>star </span>
        </>
    )
}