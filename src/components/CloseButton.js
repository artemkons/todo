import React from 'react'

const CloseButton = ({ id, onClick }) => {
    return <span className = 'btn close' onClick = { () => onClick(id) } > Close </span>
}

export default CloseButton