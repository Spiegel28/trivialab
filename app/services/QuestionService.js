import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { triviaApi } from "./AxiosService.js"


class QuestionsService {
    async getQuestions() {
        const response = await triviaApi.get()
        console.log ('got q from api', response.data);
        console.log ('looking at data', response.data.data[0]);
        const newQuestions = response.data.data.map(questionPojo => new Question(questionPojo));

        AppState.questions = newQuestions
    }
}





export const questionsService = new questionsService()