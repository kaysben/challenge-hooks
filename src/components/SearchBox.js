import ReactStars from "react-rating-stars-component";
 function Searchbox({movies,setSearchtTerm,setRating}){
 
	const ratingChanged = (newRating) => {
		setRating(newRating);
	  };
	
 	return(
 		<div className="Searchbox">
 			<input type="text"
 			placeholder= "Search..."
		
 			onChange={(event)=>{ setSearchtTerm( event.target.value);}}/>
	
	<ReactStars
	count={5}
	onChange={ratingChanged}
	size={24}
	isHalf={true}
	emptyIcon={<i className="far fa-star"></i>}
	halfIcon={<i className="fa fa-star-half-alt"></i>}
	fullIcon={<i className="fa fa-star"></i>}
	activeColor="#ffd700"
  />
 			
 		</div>
		
 		)
 }
 export default  Searchbox