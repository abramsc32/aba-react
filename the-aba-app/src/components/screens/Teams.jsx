// import React, { Component } from 'react'
// import { Card } from '../shared/Card'
// import { CardBody } from '../shared/CardBody'
// import { ballDontLieApi } from '../../services/ApiConfig'




// class Teams extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             teams: [],
//         }
//     }
    
    
//     componentDidMount() {
//         this.fetchTeams()

//     }

//     fetchTeams = async () => {
//         try {
//             const teams = await ballDontLieApi.get('/teams')
//             this.setState({ teams: [...this.state.teams, ...teams.data.data] })
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     render() {
//         const b = this.state.teams.map((team) => {
//             return (
//                 <Card key={team.id}>

//                     <CardBody>
//                         <h1>{team.city}</h1>
                        
//                         <p>{team.conference}</p>
//                         <p>{team.name}</p>
//                     </CardBody>


//                 </Card>
               
//             )
//         }
//         )
//         return (
//             <>
//                 {b}
//             </>
//         )
//     }
// }

// export default Teams