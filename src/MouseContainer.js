import React from 'react'

function MouseContainer() {
    const [ditruesplay, setDisplay] = useState()
  return (
    <div>
      <button onClick={()=> setDisplay(!display)}>
        Toggle display
      </button>
      {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer
