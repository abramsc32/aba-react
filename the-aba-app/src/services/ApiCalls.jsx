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


export const createArticle = async (articleData) => {
	try {
		const resp = await mockApi.post('/News', articleData)
		return resp
	} catch (error) {
		throw error
	}
}
