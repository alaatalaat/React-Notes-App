import './App.css';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import Edit from './components/Edit/Edit';
import { useState } from 'react';
import nonotes from './assets/illustration.png';

function App() {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [notes,setNotes] = useState(getNotesFromLS);
  const [editId,setEditId] = useState("");
  localStorage.setItem("notes",JSON.stringify(notes));

  function getNotesFromLS(){
    const note = JSON.parse(localStorage.getItem("notes"));
    if(note){
      return note ;
    }else{
      return [] ;
    }
  }


  return (
    <>
      <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} />
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9">
              {notes.length>0&&<h3 className="mb-2" style={{color:"#FFC905"}}>All Notes</h3>}
              {
                notes.length===0 ?
                <div className='text-center'>
                  <h3 className="card-title mb-2" style={{color:"red"}}>No Notes Are Available For Read !</h3>
                  <div><img src={nonotes} /></div>
                </div>
                : notes.map((ele)=>{
                          return (               
                          <>
                            <Notes element={ele} key={ele.id} notes={notes} setNotes={setNotes} setEditId={setEditId} />
                          </>
                          )
                      })
             }
          </div>
        </div>
      </div>
      <Edit editId={editId} notes={notes} setNotes={setNotes} />
      
    </>
  );

}

export default App;
