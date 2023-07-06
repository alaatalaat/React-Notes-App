import React from "react";

export default function Notes({element,notes,setNotes,setEditId}) {
    function removeHandler(id){
        const newNotes = notes.filter((ele)=>{
            if(ele.id!==id){
                return ele ;
            }
        });
        setNotes(newNotes);
    }

    function editHandler(id){
        notes.filter((ele)=>{
            if(ele.id===id){
                document.getElementById("editTitle").value = ele.title ;
                document.getElementById("editDesc").value = ele.desc ;
            }
        });
        setEditId(id);
    }


  return (
    <>
        <div className="card mb-3">
              <div className="card-body container-fluid">
                <div className="row">
                    <div className="col-10 text-capitalize">
                        <h5 className="card-title text-danger" style={{fontWeight:"bold"}}>{element.title}</h5>
                        <p className="card-text" >{element.desc} </p>
                    </div>
                    <div className="col-1 justify-content-center align-items-center d-flex">
                        <i type="button" style={{color:"#00A558"}} onClick={()=>{editHandler(element.id)}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa-solid fa-pen-to-square fa-xl"></i>
                    </div>
                    <div className="col-1 justify-content-center align-items-center d-flex">
                        <i className="fa-solid fa-trash fa-xl text-danger" onClick={()=>removeHandler(element.id)}></i>
                    </div>
                </div>
              </div>
        </div>
    </>
  );
}
