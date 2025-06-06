### Backend Scaffold Tool

This repository helps to quickly handle the boilerplate code for my expressjs applications. It is intended to be lightweight so it makes only one assumption:
➡️ You're using **TypeORM** with **PostgreSQL**.

If you're using a different database, you can:

1. npm uninstall pg, typeorm
2. Replace db.config.ts with the necessary db initialization code.

In order to use this tool, do the following:

1. Create a new folder for your project.
2. Clone the repo: git clone https://github.com/Akorex/backend-scaffold.git
3. cd backend-scaffold
4. rm -rf .git
5. git init
6. npm install
