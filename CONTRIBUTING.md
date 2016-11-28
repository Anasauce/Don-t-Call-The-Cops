# JustUs

Open Source Project

## Contributing

1. Fork this repository
2. Take a ticket from the [project board](https://github.com/GuildCrafts/Don-t-Call-The-Cops/projects/1)
3. Cut a topic branch
4. Finish the ticket

### Cutting a new branch

```
git fetch upstream
git checkout -b issuenumber-my-topic-branch upstream/master
git push -fu origin HEAD
```

## Submit a pull request
Rebase your branch off of the latest upstream/master before submitting your pull request
- Please have one PR for each spec
- Squash all commit messages into one meaningful message before issuing PR
- All PRs must go through a code review before being merged

```
git commit ... // commit all your changes
git fetch upstream
git rebase -i upstream/master
//resolve any conflicts
//reword one meaningful commit message
npm install
npm test
git push -f origin HEAD
```

### Development Setup

In order to create the database for this project, run the following:

```
createdb NoCops
```

#### Fork the Project and Add Remote Upstream

Go to Github and fork the project to your repo, then clone the fork. Then run the following:

```
$ git remote add upstream https://github.com/GuildCrafts/Don-t-Call-The-Cops.git
```

#### Install Postgres

```
$ brew install postgress
$ brew tap homebrew/services
$ brew services start postgresql
```
#### Add Nodemon to the Command Line

```
npm install -g nodemon
```

#### Run the Server!

At this point, you should be able to run 'yarn start' or 'npm start' without errors.

## Architecture

- Node
- Express
- Webpack
- Babel es2016
- React
- PostgreSQL and Sequelize ORM

### Contributors

Ask Contributors any questions about this project!

Week 1:
- [deonna](https://github.com/deonna)
- [dianavashti](https://github.com/dianavashti)
- [shakalee14](https://github.com/shakalee14)
- [nicosesma](https://github.com/nicosesma)
- [AnaSauce](https://github.com/AnaSauce)
