import React, { Component } from 'react'
import { Card } from '../shared/Card'
import { CardBody } from '../shared/CardBody'
import { ballDontLieApi } from '../../services/ApiConfig'




class Teams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: [],
        }
    }


    componentDidMount() {
        this.fetchTeams()

    }

    fetchTeams = async () => {
        try {
            const teams = await ballDontLieApi.get('/teams')
            this.setState({ teams: [...this.state.teams, ...teams.data.data] })
            console.log(teams)
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const b = this.state.teams.map((team) => {
            return (
                <Card key={team.id}>

                    <CardBody>
                        <h1>{team.full_name}</h1>

                        <p>Conference: {team.conference}</p>
                        <p>Division: {team.division}</p>
                    </CardBody>


                </Card>
            )
        }
        )
        return (
            <>
                <h1 className='teams-title'>American Basketball Association Teams</h1>

                <div className='team-container'>

                    {b}
                </div>

            </>
        )
    }
}

export default Teams