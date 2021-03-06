## Contribution Guidelines 
>### Headers 
  - Now, these must be present above the code your trying to implement, in the form of comments. 
  An example would be: 
    ```
    /*
    * Created Date: Thursday May 30th 2019
    * Author: Gurubalan Harikrishnan
    * Email-ID: gurubalan.work@gmail.com
    * -----
    * Copyright (c) 2019 Gurubalan Harikrishnan
    */
    ```
    This is a header usually, auto-generated by VSCode. For more details click [here](https://marketplace.visualstudio.com/items?itemName=psioniq.psi-header). 

>### File Names
  - The go to format followed here is `camelCase`, preferably no spaces in-between file names (Makes it easier for terminal based access).
  - **Important** : Do remember camelCase is followed only for file structures and not code. That is the respective native language syntax.
  
>### Pull Requests 
  - If you have any doubts in your code or want to submit for a review you can do any of these: 
    - Pull up issues and mark the respective label for it, so people can discuss.
    - Fork the repository, create a new branch in the repository and push your changes into that branch.
      - Example : For creating a new branch and switching between them :
      ```
      $ git branch <branch_name>
      $ git checkout <branch_name>
      ```
      You can also do both with a single command :
      ```
      $ git checkout -b <branch_name>
      ```
    - After pushing the changes, make a pull request so that others can review and comment on the respective changes. This will be taken as a merge request as well, and after the code is reviewed, the collaborators/Me can merge the `new branch` with the `master` branch and delete the `new branch` which you created. 
      
      This is a repository-safe method and is the most recommended way to go, if you're not sure or have some doubts in what you're pushing.

>### Branching & PR Conventions
- As you can see each language / framework has a separate branch independant of the `master` branch. One must give `PRs` to the master but not pull from them. 
   - In-order to make this organized, give sub-branch `PRs`. Example :
     - There is a branch called `vue-js`, if you're pushing a project here, `checkout` from `vue-js` and create a branch `vue-js-your-project-name` and then proceed to give a PR to `vue-js`, the moderators will then review your PR's, merge them, and take them to the `master`.
   - Through this, it will be organized and the master branch will not be disturbed. Pull from the respect parent branches of the language you're working on. This will make lesser cases of merge conflicts.

>### Issues
  - Additional labels have been added to the issues tab, if you have an additional topic/label you want to add or actually add/change feautures in this repository, create issues using the label - `Update/Changes/Requests`.
  
  - Doubts can also be raised and hence there can be several threads about it.

## Contributors 
[@Gurubalan-GIT](https://github.com/Gurubalan-GIT)


*Update your links here!*