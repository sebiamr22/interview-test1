import React from 'react'

const RoundedImg = ({src}) => {
  return (
    <span className="flex items-center justify-center rotate-45 border-4 rounded-full shadow-xl w-40 h-40 ">
            <img
              src={src}
              className="object-cover -rotate-45 rounded-full w-36 h-36"
            ></img>
          </span>
  )
}

export default RoundedImg