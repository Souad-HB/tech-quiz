# **Tech Quiz**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Mongo](https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white)
![ReactJS](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![CYPRESS](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

---

# Table of Contents

- [Project Description](#project-description)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Demonstration](#demonstration)
- [Tests](#Tests)
- [Questions](#questions)
- [License](#license)

---

## Project Description

In today's dynamic development environment, testing is not just an afterthought but a critical part of the development process that ensures applications meet user demands and perform efficiently under various conditions. Tech Quiz is an a MERN stack allows users to take a quiz of ten random questions and view their final score. This has got tests implemented using Cypress.

---

## Screenshots

- Quiz component testing:
  ![alt text](<assets/component pass.png>)

- E2E testing:
  ![alt text](<assets/e2e pass.png>)

---

## Technologies Used

- **FrontEnd**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose ORM
- **Tests**: Cypress, @testing-library/cypress

---

## Setup and Installation

Follow these steps to get the application running on your local machine:

1. Clone the Repository

   ```bash
    git clone <repository-url>
    cd tech-quiz
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Access the App

   Setup the environment variables

   ```bash
    MONGO_URI=<your-mongodb-connection-string>
   ```

4. Run the application

   You need the app running and then open another terminal to run cypress and see the tests pass!
   ```bash
   npm run start:dev
   npm run test
   ```

---

## Demonstration

Click on this [Link](https://www.loom.com/share/0c01bb1b35b64d2ea5a2e83a38ea6ea3/) to see a video demo for this app!

## Tests

This project includes two types of tests:
  1. Component Tests: Verifies the isolated behavior of React components using Cypress.
  2. End to End Tests: Tests the full user workflow, including interactions with the backend, using Cypress.

## Questions

For any questions please reach out by email, and feel free to check my github:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/souad-hb">
        <img src="https://github.com/souad-hb.png?size=100" width="100px;" alt="souad-hb's Avatar"/>
        <br />
        <sub><b>Souad</b></sub>
      </a>
      <br />
      <a href="mailto:souadsalahh@gmail.com">souadsalahh@gmail.com</a>
    </td>
  </tr>
</table>

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
