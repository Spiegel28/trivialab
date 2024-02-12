import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionService.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";


function _drawQuestions() {
    const questions = AppState.questions
    console.log('drawing questions', questions)

    let htmlString = ''

    questions.forEach(question => htmlString += question.TriviaHTML)

    setHTML('questions', _drawQuestions)

}


export class QuestionsController {
    constructor() {

    }


async getQuestions() {
    try {
        await questionsService.getQuestions()
        Pop.success('Got Questions!')
    } catch (error) {
        Pop.error(error)
        console.error(error);
    }


    }
}