import React from 'react'
import './styles/Card.css'

export const CardHeader = ({ imageUrl }) => (
	<div className='card-header'>
		<img src={imageUrl} alt='card header' />
	</div>
)
