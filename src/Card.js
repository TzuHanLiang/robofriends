import React from 'react';

const Card = ({id, name, email}) => {
	return(
		<div className='bg-yellow dib pa3 br3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
			<div>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>
	);
}
// const Card = (prop) => {
// 	const {id, name, email} = prop;
// 	return(
// 		<div className='bg-light-pink dib pa3 br3 ma2 grow bw2 shadow-5'>
// 			<img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
// 			<div>
// 			<h2>{name}}</h2>
// 			<p>{email}}</p>
// 			</div>
// 		</div>
// 	);
// }
// const Card = (prop) => {
// 	return(
// 		<div className='bg-light-pink dib pa3 br3 ma2 grow bw2 shadow-5'>
// 			<img alt='robot' src={`https://robohash.org/${prop.id}?200x200`}/>
// 			<div>
// 			<h2>{prop.name}</h2>
// 			<p>{prop.email}</p>
// 			</div>
// 		</div>
// 	);
// }

export default Card;