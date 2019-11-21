import React, { Component } from 'react'
import ArticleForm from '../ArticleForm'
import { mockApi } from '../../services/ApiConfig'

export default class CreateArticles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            title: '',
            description: '',
            paragraph: '',
            image: '',
            newPost:[],
            errorMsg: '',
        }
       
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
     }


    handleSubmit = (e) => {
        e.preventDefault()
        const { name, title, description, paragraph, image } = this.state
        const data = {
            name,
            title,
            description,
            paragraph,
            image
        }
        mockApi.post('/News', data)
            .then((res) => res.status === 201 ? this.props.history.push('/Articles') : null)
            .catch(() => this.setState({ errorMsg: 'There was an ERROR!' }))
    }

    render() {
        const { name, title, description, paragraph, image } = this.state
        console.log('yoo')
        return (
            <div className="food-forms">
                <h3>Create Article</h3>
                <ArticleForm
                    formData={{ name, title, description, paragraph, image }}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    this={'isaprop'}
                />
                {this.state.errorMsg ? (
                    <p className="error-text">{this.state.errorMsg}</p>
                ) : null}
            </div>
        )
    }
}
