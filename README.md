This repository is for ICT-project, made in HAMK. 
The main goal this project is to test Github actions and create CI/CD pipeline with Cypress testing. 
We have a simple React application with frontend and backend. Frontend gets a JSON string from backend.
Cypress is implemented in this React project and we created some simple Cypress tests.
In the end we created a  Github action, which is triggered with every push in the main branch. The action does the testing and sends a message to our Slack channel, to notify that someone has made the push. 
