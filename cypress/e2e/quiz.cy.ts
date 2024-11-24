describe('quiz', () => {
  
  it('the quiz start button is displayed once the page loads', () => {
     cy.visit("http://localhost:3001/");
     cy.findByRole('button', {name: 'Start Quiz'});
  });

  it('a user should be able to click the start button', () => {
     cy.visit("http://localhost:3001/");
     cy.findByRole("button", { name: "Start Quiz" }).click();
  });

  it('should fetch questions from the back')

  it('a user should be able to see the quiz question', () => {

  });

  it('user should see the multiple choice answers', () => {

  });

  it('should be able to click on the desired answer button', () => {

  });

  it('should move on to the next question after click on the 1-4 answer button', () => {

  });

  it('user should see the Quiz Completed text after the 10th question', () => {

  });



})