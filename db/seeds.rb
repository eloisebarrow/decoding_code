# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Deck.create!([
  { topic: "General Programming", is_public: true, user_id: nil, img: "https://res.cloudinary.com/eloise/image/upload/v1570549941/sei_project_4/deck%20images/gp.jpg" },
  { topic: "HTML", is_public: true, user_id: nil, img: "https://res.cloudinary.com/eloise/image/upload/v1570550398/sei_project_4/deck%20images/html.png" },
  { topic: "CSS", is_public: true, user_id: nil, img: "https://res.cloudinary.com/eloise/image/upload/v1570550398/sei_project_4/deck%20images/css.png" },
  { topic: "JavaScript", is_public: true, user_id: nil, img: "https://res.cloudinary.com/eloise/image/upload/v1570550213/sei_project_4/deck%20images/js.png" },
  { topic: "React", is_public: true, user_id: nil, img: "https://res.cloudinary.com/eloise/image/upload/v1570550459/sei_project_4/deck%20images/react.png" },
  { topic: "Git and Github", is_public: true, user_id: nil, img: "https://res.cloudinary.com/eloise/image/upload/v1570550545/sei_project_4/deck%20images/git.png" },
  { topic: "Express.js", is_public: true, user_id: nil, img: "https://res.cloudinary.com/eloise/image/upload/v1570550759/sei_project_4/deck%20images/express.png" },
  { topic: "Node.js", is_public: true, user_id: nil, img: "https://res.cloudinary.com/eloise/image/upload/v1570550836/sei_project_4/deck%20images/node.png" },
  { topic: "SQL", is_public: true, user_id: nil, img: "https://res.cloudinary.com/eloise/image/upload/v1570550885/sei_project_4/deck%20images/sql.png" },
  { topic: "Ruby on Rails", is_public: true, user_id: nil, img: "https://res.cloudinary.com/eloise/image/upload/v1570550960/sei_project_4/deck%20images/ruby.png" },
])

Card.create!([
  { prompt: "MVC", answer: "Model (connection to your database) View (what the user sees) Controller (brains/logic of the operation). It's purpose is to delineate a way to organize your code.", is_public: true, deck_id: 1 },
  { prompt: "Explain the difference between a framework and a library", answer: "A library is like a vocabulary and a framework is like a language. Both offer code to help you solve problems but a library allows you to cherry pick the pieces you use whereas a framework comes with rules and conventions to follow in order to use it.", is_public: true, deck_id: 1 },
  { prompt: "What is the purpose of semantic HTML5 elements?", answer: "They provide more context for your code and add to the accessibility of a site. Ex: main, header, nav, aside, footer", is_public: true, deck_id: 2 },
  { prompt: "What is the difference between the head and header tag?", answer: "The head tag contains information related to the title and heading of page's content; it is not displayed on the page. The header tag contains content to be displayed on the page's header.", is_public: true, deck_id: 2 },
  { prompt: "Explain the difference between visibility: hidden and display: none", answer: "Visibility: hidden hides an image from the user but preserves the space it took up. Display: none removes the element from the layout and does NOT preserve the space.", is_public: true, deck_id: 3 },
  { prompt: "What does CSS stand for?", answer: "Cascading Style Sheets", is_public: true, deck_id: 3 },
  { prompt: "Explain the difference between == and ===.", answer: "Both are comparison operators where == compares just the value and === compares the value and data type. Ex. 1 == '1' returns true but 1 === '1' returns false.", is_public: true, deck_id: 4 },
  { prompt: "What is a higher order function?", answer: "A method that calls another function.", is_public: true, deck_id: 4 },
  { prompt: "What are hooks?", answer: "Hooks are a React feature that allow you to use state in a functional component.", is_public: true, deck_id: 5 },
  { prompt: "Explain the React lifecycle.", answer: "The sequential process a component goes through. There are three stages - Mounting (when a user arrives to the page), Updating (when state changes) and Unmounting (when the user leaves the page).", is_public: true, deck_id: 5 },
  { prompt: "What's the command for creating a new branch and checking it out?", answer: "git checkout -b <branch-name>", is_public: true, deck_id: 6 },
  { prompt: "You've created a new local directory. What's the next step to attach it to a remote Github repository?", answer: "Navigate to github, create a new repository (without initializing a README), copy the link provided and type the following into your terminal: git remote add origin <copied link>.", is_public: true, deck_id: 6 },
  { prompt: "Define Express.js", answer: "Express.js is a framework for creating a web server that runs on the node platform.", is_public: true, deck_id: 7 },
  { prompt: "How would you retrieve the body of a user's request in Express?", answer: "req.body", is_public: true, deck_id: 7 },
  { prompt: "What's the command for initializing a package.json file from the terminal?", answer: "npm init", is_public: true, deck_id: 8 },
  { prompt: "You've just forked and cloned a github repo, and see there's a package.json file. What command do you run to install the necessary dependencies?", answer: "npm i", is_public: true, deck_id: 8 },
  { prompt: "What is PostgreSQL?", answer: "An object-relational database management system (ORM)", is_public: true, deck_id: 9 },
  { prompt: "How would you add a country name to a table called 'countries' in SQL?", answer: "INSERT INTO countries (name) VALUES ('United States of America')", is_public: true, deck_id: 9 },
  { prompt: "What Ruby method could you use to loop through a string?", answer: ".each_with_char", is_public: true, deck_id: 10 },
  { prompt: "What's the command for starting a rails server with a PSQL database?", answer: "rails new <app-name> --database=postgresql", is_public: true, deck_id: 10 }
])