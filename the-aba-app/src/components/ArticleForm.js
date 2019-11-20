import React from 'react'
import { Input, Button } from './shared'

const ArticleForm = (props) => {
	const { onChange, onSubmit } = props
	const { personName, title, description, paragraph, image} = props.formData
	return (
		<form className='form' onSubmit={(e) => onSubmit(e)}>
			<Input
				name='name'
				value={personName}
				required={true}
				placeholder='Created By:'
				onChange={(e) => onChange(e)}
			/>
			<Input
				name='title'
				value={title}
				required={true}
				placeholder='Title of Article'
				onChange={(e) => onChange(e)}
			/>
			<Input
				name='description'
				value={description}
				required={true}
				placeholder='Short Description of Article'
				onChange={(e) => onChange(e)}
			/>
			<Input
				name='paragraph'
				value={paragraph}
				required={true}
				placeholder='The Articles Content'
				onChange={(e) => onChange(e)}
			/>
			<Input
				name='image'
				value={image}
				required={true}
				placeholder='Article Image'
				onChange={(e) => onChange(e)}
			/>
			
			<Button title='Publish' color='primary' />
		</form>
	)
}
export default ArticleForm
