
# About my Task

As stated in the Readme of this project, Honesto is an application allowing peers to leave feedback for other team members. The 3 major features of this application is to Gather Feedback, Display the Feedback given and Display the received Feedback.


* This is a React application which uses CRA boilerplate and typescript.

* The application makes use of Functional components and React Hooks for implementations and logic creation.

* The application uses React context API for managing state across the application.

* Currently, user profile are mocked in a mock file *people.json* and the question in *questions.json* which contains all questions used for the feedback creation.

* The application contains a .env file in the root directory which is used to store sensitive values e.g API keys and Id

* For Rating feedbacks and multiple choice feedback, the application uses react-rating NPM package







# Honesto - Frontend Practical Exercise

Honesto is an application allowing peers to leave feedback for other team members.  For this exercise, you are to 
implement the required tasks below, along with any bonus tasks you also have time to complete.

Designs for all tasks are [available in Figma](https://www.figma.com/file/P5D3PIAyzSfu3zOTjR2vnU/Practical-FE-Exercise-Honesto), please follow these designs for all tasks.

The application has a few small changes from Figma to help in development of the following tasks: 
* The login page allows you to quickly login as a different user to see the data from the perspective of that user.
* The time period for giving reviews is intentionally absent from the application, so for this exercise treat the feedback as a one time event rather than per time period.  There is an optional task to extend this functionality to monthly reports.

## Task 1: Gather Feedback

A user can provide feedback on other team members (_"Share Feedback" in Figma_).  For a selected team member, they will answer a series of questions. 

- The questions to ask are already stored in the React context.
- Create the user interface needed to ask and collect answers for each question for a selected team member.
- Update the app to save the results of the feedback.  _The saved results do not need to persist through a page refresh but the app should allow full navigation without data loss._
- Your data model should support feedback from/to various users.

## Task 2: Display Feedback Given

After having given feedback, a user can review all the feedback they have given to other team members (_"My Feedback" in Figma_).

- Display all feedback given by the current user.  
- Include the case of when no feedback has been given.

## Task 3: Display Received Feedback 

Besides giving feedback, a user can also see feedback received from their team (_This does not exist in Figma other than the navigation item "Team Feedback", but you can model it after the layout of the previous task._).

- Display the feedback received by the current user from other team members.
- Include the case of when no feedback has been received.

## Bonus Tasks (optional)

Feel free to also implement any the following task if you are just getting warmed up:

- [ ] Add Accessibility (A11y) testing and update components to comply
- [ ] Create a dark theme for the project
- [ ] Make the app more responsive on various devices
- [ ] Update the app to have multiple feedback collections (per month) for each user
- [ ] Write some tests (jest, cypress, react testing library, etc)
- [ ] Add documentation about your tasks to help other developers understand decisions you made


