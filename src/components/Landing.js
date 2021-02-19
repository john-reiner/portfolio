import React from 'react'
import LandingLinks from './LandingLinks'

export default function Landing(props) {
    return (
        <div>

            {props.first_name}
            
            <LandingLinks links={props.links} 

            />
        </div>
    )
}
