import React from "react";

export default function Edit({editId,notes,setNotes}) {
    function updateHandler(){
        // console.log(notes)
        const updateNotes = notes.map((ele)=>{
            if(editId===ele.id){
                return ({...ele,
                    title : document.getElementById("editTitle").value ,
                    desc : document.getElementById("editDesc").value 
                })
            }else{
                return ele ;
            }
        });
        console.log(updateNotes);
        console.log(notes);
        setNotes(updateNotes);
        
    }
  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{background:"#FFC905"}}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" style={{"color":"#000E4C"}}>Edit Notes</h5>
              <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="editTitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="editTitle" placeholder="Edit Title"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <textarea name="editDesc" id="editDesc" rows="3" className="form-control" placeholder="Edit Description"></textarea>
                    </div>
                </form>
            </div>
            <div className="modal-footer" style={{border:"none"}}>
              <button type="button" onClick={updateHandler} className="btn btn-secondary" data-bs-dismiss="modal" >Save Updates</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
