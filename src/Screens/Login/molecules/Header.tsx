import React from 'react'
import HeaderLarge from '../atoms/HeaderLarge'
import HeaderSmall from '../atoms/HeaderSmall'

interface Props {
    title: string;
    subtitle: string;
}

export default function Header(props: Props) {
    return (
        <>
            {props.title ? <HeaderLarge text={props.title} /> : null}
            {props.subtitle ? <HeaderSmall text={props.subtitle} /> : null}
        </>
    )
}