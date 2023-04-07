import React from 'react';

// Todo1:img width and height value should from config.

const ProductImages = (context) => {
	const { data: { img }} = context;

	return (
		<div>
			<img
				src={ img }
				alt="images"
				width="220px"
				height="200px"
			/></div>);
};

export default ProductImages;
