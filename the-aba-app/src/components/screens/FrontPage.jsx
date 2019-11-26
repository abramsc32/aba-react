import React, { Component } from 'react'
import { mockApi } from '../../services/ApiConfig'
import { TopPost } from '../shared/TopPost'
import { TopHead } from '../shared/TopHead'
import { TopContent } from '../shared/TopContent'




export default class FrontPage extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            numbers: [1, 2, 3, 4, 5],
            oneArticle: [],
        }
    }
    componentDidMount() {
        this.fetchArticle()
    }

    fetchArticle = async () => {
        try {
            const randomArt = Math.floor(Math.random() * 5)

            console.log(randomArt)
            const articles = await mockApi.get(`/News`)
            this.setState({ articles: articles.data })
        } catch (error) {
            console.error(error)
        }
    }
  

    renderArticle = () => {
        const {

        } = this.props

        if (this.state.articles.length) {
            return this.state.articles.map((news) => (
                <TopPost>
                    <TopHead>
                        <h1 className='article-title'>{news.title}</h1>
                        <p className='description'>{news.description}</p>
                        <p className='author'> {news.name}</p>
                        <TopContent imageUrl={news.image}/>
                        <br></br>
                        <p className='para1'>{news.paragraph}</p>
                        <br></br>
                        <p className='para2'>{news.paragraph2}</p>
                        <br></br>
                        <p className='para3'>{news.paragraph3}</p>
                    </TopHead>
                    <div className="seperate"></div>

                </TopPost>

            )
            )
        }
    }
    render() {
        return (
            <>
                <h1 className='aba-title'>American Basketball Association</h1>
                {this.renderArticle()}
            </>
        )
    }





}