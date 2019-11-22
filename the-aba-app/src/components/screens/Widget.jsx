import React, { Component } from 'react'
import { ballDontLieApi } from '../../services/ApiConfig'
import { LeaderboardCard } from '../shared/LeaderboardCard'


class Widget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSet: [],
            players:['192','15', '37', '132', '278', '237', '490', '65', '404', '137', '406', '176', '83', '229','283', '378', '79', '417', '139', '367', '214'],
            // playersObj: [{id: 1, name: 'smith'},{id: 2, name:}]
        }
    }
    componentDidMount() {
        this.fetchLeaders()

    }
    getPlayerNameById(id) {
        switch (id) {
            case 192:
                return 'James Harden'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 15:
                return 'Giannis Antetokounmpo'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 37:
                return 'Bradley Beal'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 132:
                return 'Luka Doncic'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 278:
                return 'Damian Liliard'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 237:
                return 'LeBron James'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 490:
                return 'Trae Young'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 65:
                return 'Malcolm Brogdon'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 404:
                return 'Ricky Rubio'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 137:
                return 'Andre Drummond'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 406:
                return 'Damontas Sabonis'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 176:
                return 'Rudy Gobert'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 83:
                return 'Clint Capela'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 229:
                return 'Johnathan Isaac'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 283:
                return 'Kristaps Porzingiz'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 79:
                return 'Jimmy Butler'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 417:
                return 'Ben Simmons'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 139:
                return 'Kris Dunn'
                break;
        
            default:
                break;
        }
        switch (id) {
            case 367:
                return 'Chris Paul'
                break;
        
            default:
                break;
        }
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
     
    
    
    render() {
        // console.log(getPlayerNameById(192))
        
        // name = this.getPlayerNameById(resp.data)

        // dataSet.forEach((player) => {
        //     temp = []
        //     const resp = get(`/${dataSet}/${ player.id }`)
        //     temp.push(resp.data)
        //     temp.forEach(data => {
        //       myObj = {
        //         id: player.id,
              
        //       }
        //       this.setState({playerData:[...state.playerData, obj]})
        //     })
        //   })
     
        return (
            <>
            <LeaderboardCard>
                
            </LeaderboardCard>
         <h1>Points Leaders</h1>
            
                
            </>
        )
    }
}
export default Widget


