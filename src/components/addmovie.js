import { Button,Modal, } from 'react-bootstrap';
import {useState} from 'react';




function Addmovie({movies,setMovies}) {
  const [title,setTitle] = useState("");
  const [year,setYear] = useState("");
  const [poster,setPoster] = useState("");
  const [description,setDescription] = useState("");  
  const add= ()=> setMovies([...movies,{ Title: title,Year:year, Poster:poster}]);
  
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add your Favorite Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input type="text"
 			placeholder= "title..."
		
 			onChange={(event)=>{ setTitle( event.target.value);}}/>
              <input type="text"
 			placeholder= "year..."
		
 			onChange={(event)=>{ setYear( event.target.value);}}/>
              <input type="text"
 			placeholder= "poster..."
		
 			onChange={(event)=>{ setPoster( event.target.value);}} />
              <input type="text"
 			placeholder= "Description..."
		
 			onChange={(event)=>{ setDescription( event.target.value);}} />
           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={add} >add movie </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 
  


  export default Addmovie