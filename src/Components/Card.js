import { useState } from "react";

function Card({ id, name, image, info, price,removeTour }) {

	const [readmore, setreadMore] = useState(false);

	 const description = readmore ? info:`${info.substring(0, 200)}....`

	

	function readmoreHandler() {
		setreadMore(!readmore)
	}
	return (
		<div className="card">

			<img src={image} alt="images" className="image" />

			<div className="tour-info">
				<div className="tour-details">

					<h4 className="tour-price">$ {price}</h4>
					<h4 className="tour-name">{name}</h4>
				</div>

				<div className="description">
					{description}
					<span className="read-more" onClick={readmoreHandler}>
						{readmore ? `Show Less` : `Read More`}
					</span>
				</div>
			</div>


			<div className="btn">
				<button className="btn-red" onClick={()=>removeTour(id)}>
					Not Interested
				</button>
				<button className="btn-green" onClick={()=>removeTour(id)}>
					Interested
				</button>
			</div>
			
		</div>
	)
}

export default Card;