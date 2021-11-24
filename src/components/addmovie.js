import { Button,Modal, } from 'react-bootstrap';
import {useState} from 'react';

function Addmovie({movies,setMovies}) {

  const [title,setTitle] = useState("");
  const [trailer,setTrailer] = useState("");
  const [poster,setPoster] = useState("");
  const [rate,setRate] = useState("");
  const [description,setDescription] = useState("");  
  const add= ()=> setMovies([...movies,{title,trailer,poster,rating:rate,description}]);
  
  const [show, setShow] = useState(false);
  console.log(title,rate,trailer)
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
 			placeholder= "description..."
		 value={title}
 			onChange={(event)=>{ setDescription( event.target.value);}}/>
              <input type="text"
 			placeholder= "title..."
		 value={title}
 			onChange={(event)=>{ setTitle( event.target.value);}}/>
            <input type="text"
 			placeholder= "rate..."
		 value={rate}
 			onChange={(event)=>{ setRate( event.target.value);}}/>
              <input type="text"
 			placeholder= "trailer..."
      value={trailer}
 			onChange={(event)=>{ setTrailer( event.target.value);}}/>
              <input type="text"
 			placeholder= "poster..."
      value={poster}
 			onChange={(event)=>{ setPoster( event.target.value);}} />
           
          </Modal.Body>
          <Modal.Footer>
           
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={add}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 
  


  export default Addmovie