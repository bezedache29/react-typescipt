import React from 'react'

type CardProps = {
    title: string;
    content: string;
}

const Card = (props: CardProps) => {
    console.log(props)
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
    </div>
  )
}

export default Card