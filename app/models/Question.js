export class Question {
    constructor(data){
        this.difficulty = data.difficulty
        this.question = data.question
        this.incorrectAnswers = data.incorrect_answers
        this.correctAnswer = data.correct_answer
    }




    get TriviaHTML() {
        return `
        <div class="col-12 card text-center py-3">
        <div class="card-top">
          <h1>Question</h1>
          <h2>insert question here</h2>
        </div>
        <div class="card-body">
          <h3>Possible answers here</h3>
        </div>
      </div>
        `
    }
}