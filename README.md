# Jashele Tillman -  Car Sales
This project is solely for the implementation of Redux as the state management system in an already structured and styled app.


<br />

## Contact Me:


<a href="https://www.linkedin.com/in/jashelet/" target=_blank>
<img src="images/linkedin.png" alt="Contact Jashele on LinkedIn"> </a><a href="https://twitter.com/jasheloper" target=_blank>
<img src="images/twitter.png" alt="Contact Jashele on Twitter"></a><a href="mailto:jtmediaaccts@gmail.com">
<img src="images/email.png" alt="Contact Jashele via Email"></a>

<br />

**My Portfolio:** <a href="http://jasheletillman.me/" target=_blank>JasheleTillman.Me</a>
<br />
**My Blog:** <a href="https://jashele.blog/" target=_blank>Jashele.Blog</a>

<br />
<br />
<br />



# Module Project: Redux - Car Sales

In this project you are given the skeleton/structure/styling of a React app. There is even some state built in for you. Your job will be to implement React-Redux as the state management system for this application.

## Instructions

---

Read these instructions carefully. Understand exactly what is expected before starting this project.

## Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

## Description

In this project you will implement Redux to manage the state for this React application.

## Project Set Up

---

This project was put together using create-react-app (CRA). You will not need to install CRA in order to make this project work. Follow the steps below to setup the project with the proper dependencies.

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] Download project dependencies by running one of these two commands `yarn` or `npm install`
- [ ] Add the dependencies you will need to implement Redux. Also, add you may need to add `node-sass` as a dependency.
- [ ] Using the same command tool (yarn or npm) start up the app using `yarn start` or `npm start`
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
      Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge Branch into master (student's Repository).
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete by merging the branch back into master.
- [ ] Do your magic!

# _Project - Car Sales_

- This is a really fun project, and one to show your family and friends when you've finished.
- You will be starting with a structured and styled app
- You have been commissioned to implement Redux as the state management system in this app
- You have the freedom to manage the state how you would like - ie, connecting multiple components to pass data directly to them, or maybe connecting one component, and then putting the data into a context object.

## Directions

**Step 1 - Planning 📝**

- Take a good amount of time to familiarize yourself with the project structure. Figure out what data you have and where it's being used (Pen and paper or a whiteboard will be your best friend here!)
- Plan out your state management structure as mentioned above. The only requirment is that you _must_ use Redux
- Write out the steps you think you'll need to complete this project. It seems silly, but doing this with every project will help you grow into a better developer a lot faster.
- Take note of the few comments throughout the app. They are there as little guides to nudge you in the right direction. You're welcome 😉

**Step 2 - And... Action! 🎬**

- Time to get your hands on your keyboard. Look at the first step you wrote down and start implementing!
- As you work through setting up redux, you can do it however you'd like. This is the flow that works for me:

```text
Set up "empty" reducer and initial state 👉 Set up store and Provider 👉
Connect components 👉 Add events and event handlers in UI 👉 Build action creators 👉
write the reducer logic for the actions 👉 Rinse and repeat
```

## _MVP Requirements:_

- Move the given state to the reducer as the initial state for the Redux store.
- Set up the Redux flow
- User should be able to add features to their car
- User should be able to remove added features from their car
- Total should update as user adds and removes features from their car

## Stretch Problems

Do not attempt stretch problems until MVP has been reached and a final commit has been made.

- Use Redux hooks instead of HOCs
- Implement React-Router and add a starter page where the user can choose a car. Each car should have different features that have different pricing. Have fun with this! It could end up being really cool.
- Look into the docs for Bulma and change up the styling.
- Implement an API from one of these sites [here](https://www.google.com/search?q=car+sales+api&rlz=1C5CHFA_enUS809US809&oq=car+sales+api&aqs=chrome..69i57j0l5.3580j0j1&sourceid=chrome&ie=UTF-8). I don't know if there are any good open APIs for this, so explore around. Check out what data these APIs return, and what you think would be fun to work with. The sky is the limit here!
