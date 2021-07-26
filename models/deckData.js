class DeckData {
  constructor(title, questions=[]) {
    const id = Math.random().toString(36).substr(-8);
    this.id = id;
    this.title = title;
    this.questions = questions;
  }
}

export default DeckData;
