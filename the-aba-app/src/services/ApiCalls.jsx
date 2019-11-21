import { mockApi, ballDontLieApi } from './ApiConfig'

export const getAllArticles = async () => {
    try {
        const resp = await mockApi.get('/News')
        return resp.data
    } catch(error){
        throw error
    }
}

export const getOneArticle = async (News_id) => {
    try{
        const resp = await mockApi.get(`/News/${News_id}`)
        console.log(resp.data.title)
        return resp.data 
    } catch(error){
        throw error
    }
}



export const getAllTeams = async () => {
    try {
        const resp = await ballDontLieApi.get('/teams')
        return resp.data
    } catch(error){
        throw error
    }
}
export const getPointLeaders = async () => {
    try {
        const resp = await ballDontLieApi.get('/season_averages?player_ids[]=192&player_ids[]=15&player_ids[]=37&player_ids[]=132&player_ids[]=278')
        return resp.data
    } catch(error){
        throw error
    }
}
export const getAssistsLeaders = async () => {
    try {
        const resp = await ballDontLieApi.get('/season_averages?player_ids[]=237&player_ids[]=132&player_ids[]=490&player_ids[]=65&player_ids[]=404')
        return resp.data
    } catch(error){
        throw error
    }
}
export const getReboundLeaders = async () => {
    try {
        const resp = await ballDontLieApi.get('/season_averages?player_ids[]=137&player_ids[]=15&player_ids[]=406&player_ids[]=176&player_ids[]=83')
        return resp.data
    } catch(error){
        throw error
    }
}




export const createArticle = async (articleData) => {
	try {
		const resp = await mockApi.post('/News', articleData)
		return resp
	} catch (error) {
		throw error
	}
}
