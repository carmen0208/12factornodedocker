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

