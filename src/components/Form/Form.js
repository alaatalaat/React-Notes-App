import React from "react";
import formStyle from './form.module.css';

export default function Form({title,setTitle,desc,setDesc,notes,setNotes}) {
  function inputHandle(e){
    if(e.target.id==="title"){
      setTitle(e.target.value);
    }else{
      setDesc(e.target.value);
    }
    console.log(title,desc);
  };

  function addNotesHandler(e){
    e.preventDefault();
    if(title!==""&&desc!==""){
      setNotes((note)=>{
        return (
          [...note,
          {
            title:title ,
            desc:desc ,
            id:new Date().getTime() ,
          }]
        )
      });
    }
    setTitle("");
    setDesc("");
  }
  // console.log(notes);

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <h1 className={formStyle.h1}>Planing Solutions Notes App</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <form className={formStyle.form}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value={title} className="form-control" 
                  id="title" placeholder="Enter Your Title" onChange={inputHandle}/>
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <textarea name="desc" value={desc} id="desc" rows="3"  onChange={inputHandle}
                 className="form-control" placeholder="Enter Your Description"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>Add Note</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
