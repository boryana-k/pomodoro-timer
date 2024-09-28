# Pomodoro Timer

### [Demo](https://pomodoro-timer-sage-eta.vercel.app/)
A simple Pomodoro Timer application. <br>
![App screenshot](https://github.com/boryana-k/pomodoro-timer/blob/main/public/app-screenshot.png)

## Features
- Start and stop the Pomodoro timer. 
- Reset the timer when the session is over
- Notifications using [React-Toastify](https://fkhadra.github.io/react-toastify/introduction).
- Simple, responsive UI built with [TailwindCSS](https://tailwindcss.com/) and [NextUI](https://nextui.org/).
- State management using React hooks (useState, useRef).

## Usage
- Start Timer: Click the "Start" button to begin the Pomodoro session.
- Stop Timer: Click the "Stop" button to pause the session. 
- Reset Timer: When the session is over, the "Reset timer" button is shown.
- A toast notification will be shown when the timer is started, stopped or reset.

## Technologies Used
- [Vite](https://vitejs.dev/) – Blazing fast frontend build tool for React.
- [React](https://react.dev/) – A JavaScript library for building user interfaces.
- [TailwindCSS](https://tailwindcss.com/) – A utility-first CSS framework for styling.
- [NextUI](https://nextui.org/) - UI library for React.
- [React-Toastify](https://fkhadra.github.io/react-toastify/introduction) – A React library to add notifications.
- useState – For managing the remaining time state.
- useRef – For storing the timer interval ID and managing references without causing a re-render.