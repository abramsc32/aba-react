import React, { Component } from 'react'
import { ballDontLieApi } from '../../services/ApiConfig'
import { LeaderBoardCard } from '../shared/LeaderboardCard'
// import { AssistsCard } from '../shared/LeaderboardCard'
// import { ReboundsCard } from '../shared/LeaderboardCard'
// import { BlocksCard } from '../shared/LeaderboardCard'


class Widget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSet: [],
            rebArr: [],
            players: ['192', '15', '37', '132', '278', '237', '490', '65', '404', '137', '406', '176', '83', '229', '283', '378', '79', '417', '139', '367', '214'],
            // playersObj: [{id: 1, name: 'harden'},{id: 2, name:}]
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
            case 283:
                return 'Brook Lopez'
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
            case 378:
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
                // console.log(dataSet.data.data[0]['pts'])
                // console.log(dataSet.data.data[0]['reb'])
                // console.log(dataSet.data.data[0])
                this.setState((state => ({
                    dataSet: [...state.dataSet, dataSet.data.data[0]['pts']],
                    rebArr: [...state.rebArr, dataSet.data.data[0]['reb']]

                })))

            })

        }
        catch (error) {
            console.error(error)

        }
    }



    render() {

        // console.log(this.state.rebArr)


        if (this.state.rebArr.length) {
            const ptsData = this.state.rebArr

            var rebArr = ptsData.sort(function (a, b) {
                return b - a
            })
            console.log(rebArr)
     

        }

        if (this.state.dataSet.length) {
            const ptsData = this.state.dataSet

            var ptsArr = ptsData.sort(function (a, b) {
                return b - a
            })
            // console.log(this.state.dataSet)
            console.log(ptsArr)

        }


        // console.log(getPlayerNameById(192))

        // name = this.getPlayerNameById(resp.data)
        const harden = this.getPlayerNameById(192)
        const ante = this.getPlayerNameById(15)
        const beal = this.getPlayerNameById(37)
        const luka = this.getPlayerNameById(132)
        const dame = this.getPlayerNameById(278)
        const lbj = this.getPlayerNameById(237)
        const trae = this.getPlayerNameById(490)
        const brogdon = this.getPlayerNameById(65)
        const rubio = this.getPlayerNameById(404)
        const drummond = this.getPlayerNameById(137)
        const sabonis = this.getPlayerNameById(406)
        const gobert = this.getPlayerNameById(176)
        const capela = this.getPlayerNameById(83)
        const isaac = this.getPlayerNameById(229)
        const brook = this.getPlayerNameById(283)
        const kp = this.getPlayerNameById(378)



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
        // const ptLeaders = this.state.dataSet
        // const rbsLeaders = this.state.rebArr
        // console.log('These are the rebound leaders',rbsLeaders)
        // console.log('these are the point leaders',ptLeaders)
        return (
            <>
                <div className='widget-container'>
                <LeaderBoardCard>

                    <h1>Points Leaders</h1>
                    <p>1.{harden} -----------------38.4</p> 

                    <p className='slot'>2.{ante} -----------------30.3</p>

                    <p>3.{beal}-----------------30.1</p>
                    <p className='slot'>4.{luka}-----------------29.9</p>
                    <p>5.{dame}-----------------28.6</p>

                </LeaderBoardCard>
                <LeaderBoardCard>
                    <h2>Assists Leaders</h2>
                    <p>1.{lbj}-----------------11.1</p>
                    <p className='slot'>2.{luka} -----------------9.4</p>
                    <p>3.{trae}-----------------8.6</p>
                    <p className='slot'>4.{brogdon}-----------------8.2</p>
                    <p>5.{rubio}-----------------8.1</p>
                </LeaderBoardCard>
                <LeaderBoardCard>
                    <h2>Rebounds Leaders</h2>
                    <p>1.{drummond}-----------------16.8</p>

                    <p className='slot'>2.{ante}-----------------14.1</p>
                    <p>3.{sabonis}-----------------13.8</p>
                    <p className='slot'>4.{gobert}-----------------13.7</p>
                    <p>5.{capela}-----------------13.6</p>
                </LeaderBoardCard>
                <LeaderBoardCard>
                    <h2>Blocks Leaders</h2>
                    <p>1.{isaac}-----------------2.83</p>
                    <p className='slot'>2.{brook}-----------------2.40</p>
                    <p>3.{capela}-----------------2.15</p>
                    <p className='slot'>4.{kp}-----------------2.14</p>
                    <p>5.{drummond}-----------------2.1</p>
                </LeaderBoardCard>
                </div>

            </>
        )
    }
}
export default Widget


