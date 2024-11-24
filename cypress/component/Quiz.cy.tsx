import React from "react";
import Quiz from "../../client/src/components/Quiz";
import "@testing-library/cypress/add-commands";

describe("<Quiz />", () => {
  it("should render the Quiz component", () => {
    cy.mount(<Quiz />);
  });

  it("should have a start button once the page loads", () => {
    cy.mount(<Quiz />);
    cy.get("button").should("have.text", "Start Quiz");
  });

  it("should render the question component when I click on start, and make sure that it has an h2 for the question text", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.wait(500) // 500 is the wait time
      .get("div")
      .eq(0)
      .get(".card h2")
      .should("exist");
  });

  it("The question card should 4 response options that should be visible", () => {
    cy.mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait(500)
      .get(".card")
      .children()
      .eq(1)
      .children()
      .should("have.length", 4)
      .should("be.visible");
  });

  it("should respond with a total of 10 questions when the call has been made to the backend", () => {
    cy.mount(<Quiz />);
    cy.log("intercepting the request now..");
    cy.intercept(
      {
        method: "GET",
        url: "/api/questions/random",
      },
      {
        fixture: "questions.json",
      }
    ).as("mockGetRandomQuestions");

    // trigger the quiz
    cy.contains("Start Quiz").click();

    // waiting for the API request to be intercepted
    cy.wait("@mockGetRandomQuestions").then((interception) => {
      cy.log("intercepted request:", interception.request);
      cy.log("intercepted response:", interception.response);
    });

    // verifying that the first question has been rendered correctly according to the fixture
    cy.get("div")
      .eq(0)
      .get(".card h2")
      .should("have.text", "What does the // operator do in Python?");
  });

  it("should display the right score while keeping track of the correct answers", () => {
    cy.mount(<Quiz />);
    cy.intercept("GET", "/api/questions/random", {
      fixture: "questions.json",
    }).as("mockGetRandomQuestions");

    // trigger the quiz start
    cy.contains("Start Quiz").click();
    cy.wait("@mockGetRandomQuestions");

    // once the questions are generated, we loop through each question 10 times
    for (let i = 0; i < 10; i++) {
      // we set in the fixture that the 1st response is the one that's always correct
      cy.get("button").eq(0).should("have.text", "1").click();
    }
    // assert that the score is indeed 10/10
    cy.get(".alert-success").should("have.text", "Your score: 10/10");
  });

  it("should start the quiz again when the current one has finished", () => {
    cy.mount(<Quiz />);
    cy.intercept("GET", "/api/questions/random", {
      fixture: "questions.json",
    }).as("mockGetRandomQuestions");

    cy.contains("Start Quiz").click();
    cy.wait("@mockGetRandomQuestions");

    for (let i = 0; i < 10; i++) {
      cy.get("button").eq(0).should("have.text", "1").click();
    }
    cy.get("button")
      .should("have.text", "Take New Quiz")
      .should("exist")
      .click();
    cy.get(".card").children().eq(1).children().should("have.length", 4);
  });

  it("should display a loading spinner when there is no response from the API", () => {
    cy.intercept("GET", "/api/questions/random", {
      body: [],
    }).as("mockEmptyQuestionsArray");
    cy.mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait("@mockEmptyQuestionsArray");
    cy.get(".visually-hidden").should("have.text", "Loading...");
  });
});
