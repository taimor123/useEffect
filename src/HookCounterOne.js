import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setcount] = useState(0)
    const [name, setName] = useState('')
    
    
    useEffect(()=>{
        console.log('useEffect updating document titile')
        document.title = `you clicked ${count} times`
    },[count])

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setcount(count +1)}>
        click {count} times
      </button>
    </div>
  )
}

export default HookCounterOne
