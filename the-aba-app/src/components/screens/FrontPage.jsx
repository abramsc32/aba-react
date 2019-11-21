import React, {Component} from 'react'
import { mockApi } from '../../services/ApiConfig'
import { Card } from '../shared/Card'
import { CardHeader } from '../shared/CardHeader'
import { CardBody } from '../shared/CardBody'
import { MainArt } from '../frontCards/MainArt'
import {TopPost} from '../shared/TopPost'

  

export default class FrontPage extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            numbers: [1, 2, 3, 4,5],
            oneArticle:[],
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
    // fetchOneArticle = async () => {
    //     try {
    //         const oneArticle = await mockApi.get(`/News/${News_id}`)
    //         this.setState({oneArticle: oneArticle.data})
    //     } catch(error){
    //         console.error(error)
    //     }
    // }

    renderArticle = () => {
        const {
           
        } = this.props
        
        if (this.state.articles.length) {
            return this.state.articles.map((news) => (
                    <TopPost>
                    <h1>{news.title}</h1> 
                    </TopPost>
                   
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