import { questionsService } from "../services/QuestionService.js";
import { Pop } from "../utils/Pop.js"


function _drawQuestions() {

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