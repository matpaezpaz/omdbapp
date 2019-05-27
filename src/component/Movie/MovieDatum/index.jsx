import React from 'react'

const MovieDatum = ({title,value,className}) => {
    return (
        <p key={title} className={className}>
            <strong>{title}</strong> : {value}
        </p>
    )
}

export default MovieDatum;