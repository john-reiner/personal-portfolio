import React from 'react'

export default function Header(props) {

    if(props.headerData) {
        var name = props.headerData.name
    }

    return (

        

        <div>
            {console.log(name)}
            Header
        </div>
    )
}
