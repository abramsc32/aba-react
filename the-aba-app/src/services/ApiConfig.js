import Axios from 'axios'
const BASE_URL = `https://5dced59075f9360014c26426.mockapi.io/`

export const mockApi = Axios.create({
    baseURL: BASE_URL,

    }
)
const BALL_URL = `https://www.balldontlie.io/api/v1/`

export const ballDontLieApi = Axios.create({
    baseURL: BALL_URL,
})


