##1. Git Workflow

```sh
# Main branch are develop branch
git checkout -b develop

# FEATURE: feature branch are branched from develop branch
git checkout -b feature/foo develop
## modify something there
git checkout -b feature/bar develop
## merge to develop branch(From PR or term)
git checkout develop
git merge feature/foo
## rebase the things from last merged develop into another feature branch
git checkout feature/bar
git rebase develop

# RELEASE: merge all feature branchs and made a release
git checkout develop
git merge feature/bar
git checkout -b release/0.0.1 develop
#* anything come with release, like bugfix during testing from release. directly
# change it from the release branch and commit it

# When ready to production, merge to develop and master
git checkout develop
git merge release/0.0.1
git checkout master
git merge release/0.0.1
git tag V1.0.0

# Hot fix
### check out from master
git checkout -b hotfix/fix-foo master
### when finish, merge back to master
git checkout master
git merge hotfix/fix-foo 
git tag V1.0.1
### merge back to develop as well
git checkout develop
git merge hotfix/fix-foo

# CLEANUP: delete all the branches that create for this release
```
## 2. Yarn.lock

Pin down npm package version with Yarn.lock: npm shrinkwrap > npm install > npm shrinkwrap is not guaranteed to produce the same output as just shrinkwrapping once, whereas Yarn explicitly uses "an install algorithm that is deterministic and reliable"

## 3. .env file to manage configuration values

```sh
## before dotenv add
MONGO_URI=mongodb://localhost:27017/foo  node index.js
## After dotenv add
yarn add dotenv
node index.js
```

## 5. Build, Release and Run Containers with Docker Compose

* Dockerfile
* docker-compose.yml
* The .dockerignore file

   The .dockerignore file is the tool, that can help you to define the Docker build context you really need. Using this file, you can specify ignore rules and exceptions from these rules for files and folder, that won’t be included in the build context and thus won’t be packed into an archive and uploaded to the Docker server.

 
```sh
docker build -t foo/bar:1.0 .  ## The docker build command builds Docker images from a Dockerfile and a “context”
docker images # would get foo/bar:1.0 image

# Git commit and tag release
git tag v1.0.0
git checkout v1.0.0
docker-compose up -d app
# docker info and docker log
docker ps
docker logs -f foo_app_1

```

