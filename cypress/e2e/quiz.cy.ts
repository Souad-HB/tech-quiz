describe("quiz", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });
  it("the quiz start button is displayed once the page loads", () => {
    cy.findByRole("button", { name: "Start Quiz" });
  });

  it("a user should be able to click the start button", () => {
    cy.visit("http://localhost:3001/");
    cy.findByRole("button", { name: "Start Quiz" }).click();
  });

  it("should fetch the 10 questions from the backend", () => {
    // verify the API call was successfully made
    cy.intercept("GET", "/api/questions/random").as("getQuestions");

    cy.findAllByRole("button", { name: "Start Quiz" }).click();
    cy.wait("@getQuestions").its("response.statusCode").should("eq", 200);
  });

  it("a user should be able to see the quiz question", () => {
    cy.findByRole("button", { name: "Start Quiz" }).click();
    cy.get("h2").should("exist");
  });

  it("user should see the 4 multiple choice answers", () => {
    cy.findByRole("button", { name: "Start Quiz" }).click();
    for (let i = 1; i <= 4; i++) {
      cy.findByRole("button", { name: `${i}` }).should("be.visible");
    }
  });

  it("should be able to click on the desired answer button", () => {
    cy.findByRole("button", { name: "Start Quiz" }).click();
    cy.get("button").first().click();
  });

  it("should move on to the next question after click on the 1-4 answer button", () => {
    cy.findByRole("button", { name: "Start Quiz" }).click();
    cy.get("button").first().click();
    cy.get("h2").should("exist");
  });

  it("user should see the Quiz Completed text after the 10th question", () => {
    cy.findByRole("button", { name: "Start Quiz" }).click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").first().click();
    }
    cy.findByRole("heading", { name: "Quiz Completed" });
  });

  it("user should see their score after the 10th question", () => {
    cy.findByRole("button", { name: "Start Quiz" }).click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").first().click();
    }
    cy.get(".alert-success").contains("Your score:");
  });

  it("should start a new quiz when the Take New Quiz is clicked", () => {
    cy.findByRole("button", { name: "Start Quiz" }).click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").first().click();
    }
    cy.get("button").should("have.text", "Take New Quiz").click();
    cy.get("h2").should("exist");
  });
});
