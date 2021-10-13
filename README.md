# E-vent :tickets:
A helpful tool to create events :tada:
## Preview 👀
![event preview](./src/assets/event.gif) 
#### [Click here and try it now!](https://drivent-front-lyart.vercel.app/)
## About 🔎
This is an web aplication wich users can enroll yourselves in an event, choose between online or presential, choose lodges and get a certificate.
### Implemented features :heavy_check_mark:
- [x] Enrollment
- [x] Modalities categories (online or presential)
- [x] Logde options (with hotels or not)
- [x] Choose activies
- [x] Payment page
- [x] Certificate 
### Future improvements 🔮
- [ ] Mobile version
- [ ] Certificate only at the end of event
## Tech tools 🔧
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'>
  <img style='margin: 5px;' src'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'>
  <img style='margin: 5px;' src'https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white'>
  <img style='margin: 5px;' src'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white'>
  <img style='margin: 5px;' src'https://img.shields.io/badge/Amazon AWS-{232F3E}?style=for-the-badge&logo=amazonaws&logoColor=white'>
  <img style='margin: 5px;' src'https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white'>
  <img style='margin: 5px;' src'https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white'>
  <img style='margin: 5px;' src' https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white'>
</p>

## How to run ⚙️

1. Clone this repository
2. Install all dependencies
```bash
npm i
```
3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file
5. Run all migrations
```bash
npm run migration:run
```
6. Run the back-end in a development environment:
```bash
npm run dev
```
7. Or build it and run it in production environment:
```bash
npm run build
npm start
```
