# ravn-react-code-challenge

ravn react code challenge

# Clear Setup/Running instructions.

## npm install

first execute a **npm install** in the console

## npm start or npm run start

Then **run a npm start** or **npm run start**

## Create a .env file

Create a **_.env_** file in the root directory and declare the token as **REACT_APP_AUTH_TOKEN**

# Project description

A React web application using GraphQl where you can view, add and delete a task. before adding a task you need to select differents required fields and then you will able to add a new task.

# Gifs or screenshots of the working application.

- Home view:

  ![Home](/src/assets/images/part1.png)

- A Task card and status:

  ![Task](/src/assets/images/part2.png)

- Task card menu:

  ![Task menu](/src/assets/images/part3.png)

- Complete view of create task modal:

  ![Add Modal](/src/assets/images/part4.png)

- A detailed view create task modal:

  ![detailed add modal](/src/assets/images/part5.png)

- view of fields and menus:

  ![fields open](/src/assets/images/part6.png)

- All fields filled:

  ![fields filled](/src/assets/images/part7.png)

- message add a new task:

  ![After create](/src/assets/images/part8.png)

- message delete a new task:

  ![Task](/src/assets/images/part9.png)

# Decisions (About stack, project structure)

Aside from the fact that is a web app using React i wanted to improve myself adding a custom structure where can be readable and easy to understand a basic react folder structure where i have:

- Components
- Assets
- Pages
- Graphql queries and mutations
- Helper functions
- Context provider
- Utilities

In components i wanted to reuse some components so i adapted them to be more reusable, i use a layout to wrap the hole page so is more easy for me to change from one page to another but here i just have a dashboard page.

I used context to handle global state insted of redux because i thought was not needed it is not a huge app where redux can bright so i wanted to earn some time using context.

I had not worked with graphql too much but was a amazing challenge learn more about it i tried to do my best and organized the logic as i found on google.

Tailwind was a easy way to apply style to react app, i like tailwind because i can use less code and i can earn time with the best result.

I just finished the add feature and delete because i learned about react technologies and packages as calendar, dropdown menu, how to use queries and mutations with react, and others, it is not a perfect app but i tried to use best practices and provide quality.

# Technologies/libraries used

- **"@apollo/client": "^3.6.2"**

- **"@headlessui/react": "^1.6.1"**
- **"@testing-library/jest-dom": "^5.16.4"**
- **"@testing-library/react": "^13.2.0"**
- **"@testing-library/user-event": "^13.5.0"**
- **"date-fns": "^2.28.0"**
- **"graphql": "^16.5.0"**
- **"moment": "^2.29.3"**
- **"react": "^18.1.0"**
- **"react-datepicker": "^4.8.0"**
- **"react-dom": "^18.1.0"**
- **"react-modal": "^3.15.1"**
- **"react-router-dom": "^6.3.0**
- **"react-scripts": "5.0.1"**
- **"tailwind-scrollbar-hide": "^1.1.7"**
- **"web-vitals": "^2.1.4"**
- **"words-to-numbers": "^1.5.1"**
- **"autoprefixer": "^10.4.7"**
- **"postcss": "^8.4.13"**
- **"postcss-nested": "^5.0.6"**
- **"tailwindcss": "^3.0.24"**
