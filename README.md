# Decoding Code: A Software Engineering Study Guide

## Project Description

Decoding Code is a study guide for software engineering students. On arriving at the site, users can browse all topics, or decks, and peruse one or more topics to study. Each deck has dedicated flashcards with a prompt on one side (a term or question) and an answer (definition or explanation) on the other side. The site will, by default, show the prompt first.

For more in depth studying, users can create an account to save their own flashcards. PostMVP will involve, among other things, an option to save decks to a user's dashboard.

Topics will include:

- General Programming
- HTML
- CSS
- JavaScript
- React
- Express.js
- Node.js
- PostgreSQL
- Ruby on Rails
- Git and Github

This website will be built mobile-first with a React front end, a Rails backend and the database will be built using PostgreSQL.

User Stories: 

- A current Software Engineering student is trying to nail down a definition for the React lifecycle methods. They enter Decoding Code, locate the React deck and flip through flashcards on their train ride home.
- A recent graduate of a Software Engineering bootcamp has a big interview to prepare for and they need to brush up on their general programming knowledge like MVC and oh yeah, what's a Promise again? They come to Decoding Code and review the General Programming deck as well as some SQL flashcards for good measure.
- A user preparing to take a course in Software Engineering wants to study prior to their course so they can hit the ground running. They create an account on Decoding Code and save a couple of decks related to what they'll be studying - JavaScript and CSS. Partway through their course, they return to Decoding Code to drill what they've learned and find they no longer need to review the same two subjects. They remove the two decks, browse the available topics and, knowing they'll be shifting gears soon, save Ruby on Rails and Express.js to their decks.

## Project Links

- [github repo](https://github.com/eloisebarrow/decoding_code)
- [deployed site](http://decoding-code.surge.sh/)

## Wireframes & ERD

- [ERD](https://drive.google.com/file/d/13JBJbqB6kNZIXn0TYY_RPv0waS81ANL_/view?usp=sharing)
- [Mobile landing page 01](https://res.cloudinary.com/eloise/image/upload/v1570158003/sei_project_4/mobile_wireframes/p4_mobile_01.jpg)
- [Mobile landing page 02](https://res.cloudinary.com/eloise/image/upload/v1570158003/sei_project_4/mobile_wireframes/p4_mobile_02.jpg)
- [Mobile landing page 03](https://res.cloudinary.com/eloise/image/upload/v1570158003/sei_project_4/mobile_wireframes/p4_mobile_03.jpg)
- [Mobile all decks view](https://res.cloudinary.com/eloise/image/upload/v1570158002/sei_project_4/mobile_wireframes/p4_mobile_04.jpg)
- [Mobile single card view](https://res.cloudinary.com/eloise/image/upload/v1570158006/sei_project_4/mobile_wireframes/p4_mobile_05.jpg)
- [Mobile user decks view](https://res.cloudinary.com/eloise/image/upload/v1570158004/sei_project_4/mobile_wireframes/p4_mobile_06.jpg)
- [Mobile register form](https://res.cloudinary.com/eloise/image/upload/v1570158003/sei_project_4/mobile_wireframes/p4_mobile_07.jpg)
- [Mobile login form](https://res.cloudinary.com/eloise/image/upload/v1570158003/sei_project_4/mobile_wireframes/p4_mobile_08.jpg)
- [Desktop landing page 01](https://res.cloudinary.com/eloise/image/upload/v1570157717/sei_project_4/desktop_wireframes/p4_desktop_01.jpg)
- [Desktop landing page 02](https://res.cloudinary.com/eloise/image/upload/v1570157717/sei_project_4/desktop_wireframes/p4_desktop_02.jpg)
- [Desktop all decks view](https://res.cloudinary.com/eloise/image/upload/v1570157716/sei_project_4/desktop_wireframes/p4_desktop_03.jpg)
- [Desktop single card view](https://res.cloudinary.com/eloise/image/upload/v1570157718/sei_project_4/desktop_wireframes/p4_desktop_04.jpg)
- [Desktop user decks view](https://res.cloudinary.com/eloise/image/upload/v1570157716/sei_project_4/desktop_wireframes/p4_desktop_06.jpg)
- [Desktop login/register form](https://res.cloudinary.com/eloise/image/upload/v1570157718/sei_project_4/desktop_wireframes/p4_desktop_05.jpg)

## API

I've create a unique RESTful API hosted on Heroku.

## Installation Instructions

From the root folder: 

```bundle install```

From the client folder: 

```npm i```

If contributing changes, adjust the baseURL in decoding_code/client/src/services/api-helper.js to be the development URL and comment out the production URL. Adjust based on your localhost needs.

## MVP

- A Ruby/Rails server
- RESTful API database seeded with at least 2 prompts/questions per topic
- 3 database tables including users, decks and cards
- Backend routes to view all decks and one deck with corresponding cards
- Backend routes to register, login and verify a user
- React frontend that includes a components folder with CSS files for each component
- An API helper file that estalishes connections to backend controllers
- A thoughtful color palette, graphics, and an appropriate font for all content

## PostMVP

- Super cool flashcard animation
- Ability for users to save decks
- An option where users can flip through definitions first to determine the answer/prompt on the other side of the card (the site's default will be the reverse)
- Option for users to delete their account
- Link to resources for each card

## React Component Hierarchy

- [React architecture](https://www.draw.io/#G1qzn4G5G4smaLWagqYe29hmvExxMpQHzv)

## Components

| Component | Description | 
| --- | :---: |  
|  App | Calls Header, Main, Footer | 
| Header | Contains logo, topics dropdown, login/sign up buttons (or hi, user, sign out button & link to 'my decks') | 
| Main | landing page renders Home component, otherwise renders one of the following components: LoginRegisterForm, AllDecks, SingleDeck, NewCardForm, UserDecks |
| Footer | Renders links to other areas of site plus github repo and copyright |
| Home | Renders all of the following components: About, GetStarted, Browse, Aside |
| About | Renders a background image with a short intro and button to get started |
| GetStarted | Renders addition short intro text and an example flashcard that contains a button to start studying |
| Browse | Renders a title 'Browse Decks', a few example decks and a button to see all decks |
| Aside | Renders an image and outro text |
| LoginRegisterForm | Renders either login or register form |
| AllDecks | Renders a grid of divs that link to single decks |
| SingleDeck | Renders the topic title, an ordered list of cards in that deck and the SingleCard component | 
| SingleCard | Renders either a prompt or response |
| NewCardForm | Renders a form which generates a new card |
| UserDecks | Is the user's homepage - if a user hasn't saved any, it renders a suggestion to get started; otherwise it renders decks they've saved |

## Additional Libraries

Backend: 
- JSON Web Token
- CORS
- bcrypt

Frontend:
- React Router
- Axios

## Issues and Resolutions

**ERROR**: Trying to prevent a user from adding the same deck to their favorites more than once. Tried adding validation to fave model 'validates :deck && :user, uniqueness: true' but it prevents a user from adding more than one favorite altogether.

**RESOLUTION**: TBD

**ERROR**: Can't register a user through front end but can through Insomnia. Getting error 422 'unprocessable entity'.

**RESOLUTION**: Had to pass strong params to registerUser in api-helper - i.e. {user: registerData} instead of just registerData.

**ERROR**: Couldn't add favorites initially, received errors related to an initial typo "fafe" which was corrected but continued to persist. Deleted and rebuilt backend but files still had references to typo "fafe".

**RESOLUTION**: Rails created "fafe" internally during scaffolding - it read 'fafe' as singular for 'Faves'. Manually added to Users model: ```class_name: "Fave"```


**ERROR**: State would not recognize current user's ID in newCardFormData without refreshing the page, then would hold onto it after logout until refresh. This prevented logged in users from being able to create cards.

**RESOLUTION**: Added a conditional to handleLogin and handleRegister to check if there's a current user - if there is, I set state of newCardFormData.user_id to current user's ID. On logout, I reset state of newCardFormData.user_id to null.