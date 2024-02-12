

// @ts-ignore

export const triviaApi = axios.create({

baseURL: 'https://opentdb.com/api.php?amount=10&category=21&type=multiple',

timeout: 8000,
})