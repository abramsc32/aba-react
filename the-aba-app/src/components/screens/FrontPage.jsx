import React, {Component} from 'react'
import { mockApi } from '../../services/ApiConfig'
import { Card } from '../shared/Card'
import { CardHeader } from '../shared/CardHeader'
import { CardBody } from '../shared/CardBody'

  

export default class FrontPage extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            numbers: [1, 2, 3, 4,5]
        }
    }
    componentDidMount() {
        this.fetchArticle()
    }

    fetchArticle = async () => {
        try {
            const randomArt = Math.floor(Math.random() * 5)

            console.log(randomArt)
            const articles = await mockApi.get(`/News/${randomArt}`)
            this.setState({ articles: articles.data })
        } catch (error) {
            console.error(error)
        }
    }

    renderArticle = () => {
        const {
            match: { path },
            history,
        } = this.props
        if (this.state.articles.length) {
            return this.state.articles.map((news) => (
                <Card key={news.id}>
                    <CardHeader imageUrl={news.image.url}> 
                    <h1>{news.title}</h1> 
                    </CardHeader>
                    <CardBody>
                        <p>{news.description}</p>
                        <p>{news.name_time}</p>
                    </CardBody>


                </Card>
            )
            )
        }
    }
    render() {
        return (
            <>
            <h1>Front Page </h1>
            {this.renderArticle()}
            </>
        )
    }





}