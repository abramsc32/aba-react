import React, { Component } from 'react'
import ArticleForm from '../ArticleForm'
import { mockApi } from '../../services/ApiConfig'

export default class CreateArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personName: '',
            title: '',
            description: '',
            paragraph: '',
            image: '',
            errorMsg: '',
    }
}


        handleSubmit = (e) => {
            e.preventDefault()
            const { personName, title, description, paragraph } = this.state
            const data = {
                personName,
                title,
                description,
                paragraph,
                image
            }
            mockApi.post('/News', data)
                .then((res) => res.status === 201 ? this.props.history.push('/News') : null)
                .catch(() => this.setState({ errorMsg: 'There was an ERROR!' }))
        }
        handleChange = e => this.setState({ [e.target.name]: e.target.value })

        render() {
            const { personName, title, description, paragraph, image } = this.state
            console.log('yoo', personName)
            return (
                <div className="article-forms">
                    <h3>Create Article</h3>
                    <ArticleForm
                        formData={ personName, title, description, paragraph, image }
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                    />
                    {this.state.errorMsg ? (
                        <p className="error-text">{this.state.errorMsg}</p>
                    ) : null}
                </div>
            )
        }
    }
