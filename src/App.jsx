import React, { useContext } from 'react'
import { TodoContext } from './Contextapi'

const App = () => {

  const{
    post,
    list,
    eindex,
    changehandler,
    clickhandler,
    dhandler,
    uhandler
  }=useContext(TodoContext);

  return (
    <div className='wrp'>
      <div className='dis'>
      <input
        type='text'
        placeholder='add'
        value={post}
        onChange={changehandler}
      />
      <button onClick={clickhandler} className='add'>{eindex!==null? 'Update':'Add'}</button>
      </div>

      <div>

        {list.map((li,index)=>(

          <div className='dis2'>
          <li className='li' key={index}>{li}</li>
          <button onClick={()=>dhandler(index)} className='x'>X</button>
          <button onClick={()=>uhandler(index)} className='u'>Update</button>
          </div>

          ))}

      </div>
    </div>
  )
}

export default App
