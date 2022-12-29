import React from 'react'

type CardProps = {
    title: string;
    content: string;
}

const Card = ({title, content}: CardProps) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  )
}

export default Card