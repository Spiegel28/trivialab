import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionService.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";


function _drawQuestions() {
    const questions = AppState.questions
    console.log('drawing questions', questions)

    let htmlString = ''

    questions.forEach(question => htmlString += question.TriviaHTML)

    setHTML('questionCard', htmlString)

}


export class QuestionsController {
    constructor() {
        console.log('questions controller loaded');
        this.getQuestions()

        AppState.on('questions', _drawQuestions)

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

    async waitForPromise() {
        const message = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('running 3rd')
            }, 3000,)
        })

        console.log(message)
    }
}