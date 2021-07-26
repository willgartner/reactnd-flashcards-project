class CardData {
  constructor(question, answer) {
    const id = Math.random().toString(36).substr(-8);
    this.id = id;
    this.question = question;
    this.answer = answer;
  }
}

export default CardData;
