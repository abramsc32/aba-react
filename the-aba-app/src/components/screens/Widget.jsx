import React, { Component } from 'react'
import { ballDontLieApi } from '../../services/ApiConfig'


class Widget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSet: [],
            players:['192','15', '37', '132', '278', '237', '490', '65', '404', '137', '406', '176', '83', '229','283', '378', '79', '417', '139', '367', '214'],

        }
    }
    componentDidMount() {
        this.fetchLeaders()

    }
    fetchLeaders = async () => {
        try {
            this.state.players.forEach(async (players) => {

            const dataSet = await ballDontLieApi.get(`/season_averages?player_ids[]=${players}`)
            console.log(dataSet)

            this.setState(( state => ({ 
                dataSet: [...state.dataSet, dataSet.data.data] 
            })))

        })

        } catch (error) {
            console.error(error)
            
        } 
    }
        // fetchStocks = async () => {
        //     try {
        //         this.state.tickers.forEach(async (tickers) => {
    
        //             const stocks = await Axios.get(`https://cloud.iexapis.com/stable/stock/${tickers}/quote?token=${IEX_TOKEN}`)
        //             this.setState((state => ({
        //                 stocks: [...state.stocks, stocks.data]
        //             })))
        //         })
        //     } catch (error) {
        //         console.log('Error', error)
        //     }
        // }
    
    render() {
        // myData.forEach((player) => {
        //     temp = []
        //     const resp = get(`/players/${ player.id }`)
        //     temp.push(resp.data)
        //     temp.forEach(data => {
        //       myObj = {
        //         id: player.id,
        //         rebounds: player.rebounds,
        //         score :player.score
        //       }
        //       this.setState({playerData:[...state.playerData, obj]})
        //     })
        //   })
     
        return (
            <>
         <h1>Points Leaders</h1>
            
                
            </>
        )
    }
}
export default Widget


