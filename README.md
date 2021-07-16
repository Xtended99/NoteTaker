
#  NoteTaker
NoteTaker Toolr 
  
  
  Please use the following link to see published version of this repository https://xtended99.github.io/TeamInfoBuilder/  
  
  The home for this project lives at the following link at GitHub https://github.com/Xtended99/TeamInfoBuilder   
  
  Please use the following link for the official and supported download at NPM  https://www.npmjs.com/package/teaminfo?__cf_chl_captcha_tk__=3646a1a82d1ea316bdad67f69a8e0eaa721b3365-1625594987-0-AVGJ_MmHPJj8zCIZyNmXSMORDWBLHCCge0M5hNoz154JHyGF2P-1gqnvepDQuTi_NekJyA4PKHYeXKu0Fo6dzL4835dyPrQqNxwk9_2G9IeW4WmA7K4Ib4LSjO-Wvfc7ZeL8wfujj5yrJFAfc6yPqFCyL9KeSszv4J2Uxctwk4pJbUVlwxprHX7TXp8CrLWGTHmQwpVcNG4Lg873uJHLs89A-F8rKN-OH03lPzRUm2u4xsnajb5QPtoelSWWYZ5fkFo7qadY1eH79TAZT3Dz5vUfOKw8t5cuu2IbeYV1z_pIfQm9l4TUtCrzYr2OkjAX8qjjVodR_G4Jb0PUfB6sB7zEwCHKM8yiVvB5pViRJL5zq-x18mI0RTYEkSB6AAzKp39rMoVKAl4AGXOlNASnEHFKLvA5zgt9SZyKx4P4lEX1w3ylkqGBTp1n2SMJZW3gQYQq9LRKG-iJQgQ6096nMDlZfzjz37hpu5TCIupzIEAaOMCTk2qkWDN-ec1FnNMj5CSH9g29gu3NdZ1ghrNyICPctPhZf2BvKP25ZS6y1TaYn1r2qleluEJ1aRv1BtxCjruFbMxchxCtmsQysKITI9_hD4T0eYbOLmPd8FT6ImHbK9Uyg1b8IJ4wYhpE0T5y0y9w-m5ndvbIJ-vd9jKi0zLaM5FqEvEpyE_YaY3c7hlh   
  

  To install from npm all you have to do is the following   
  
    npm -y init   
    npm install teaminfo   
  
  To install from github all you have to do is the following   
  
    git clone git@github.com:Xtended99/TeamInfoBuilder.git   
    npm install inquirer util fs fs-extra inquirer-loop   
  
  To run the utility   
  
    Create a .js file with the following contents only   
    require( 'teaminfo' );   

    node The_Name_Of_Your_JS_File.js   
  
    From there just follow the prompts.   
  
  ## Please Read this carefully!!! A very important note:   
  
    After you have entered one or many employees, After the last employtee you will be asked   
  
    ? Would you like to run this again? (Y/n)  
  
![After the last employee question](./assets/images/end_of_run.png)   
  
    Please select NO or it will ovewrite your previous answers.   
    To see the compiled HTML please point your browser to the dist directory   
    and pick the index.html   
  
   In order to test you must run the tool once.   
   The test commands are   
         npm run test   
  
![TeamInfoBuilder Intro Screen](./assets/images/instructionspng.PNG)   
   
![ Run_One MP4](./assets/videos/teaminfobuilder.mp4)   
     
  This assignment is to create a tool that can auto generate a index.html file based on a set of predetermined questions.  
  There is a video link above and below for show and tell
     
![Run_Two MP4](./assets/videos/TeamInfo_Tool_Browser.mp4)   

  This is test the video
![Run_Two MP4](./assets/videos/team_info_builder_test.mp4)   
  
### Given:
  
Your task is to build a Node.js command-line application that takes in information about employees on a software   
engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making   
code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.  
  
Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates  
its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.
  
**Note**: There is no starter code for this assignment.
     
-   The application will be invoked by using the following command:   
   
-   node index.js   
   
-   Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that   
-   demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to   
-   record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.   
   
   
### Experience the user should expect - User Story:   
   
- AS A manager I WANT to generate a webpage that displays my team's basic info SO THAT I have quick access to their emails and GitHub profiles  
    
### Website incorporated feature sets and expectations - Acceptance Criteria:  
  
- GIVEN a command-line application that accepts user input  
- WHEN I am prompted for my team members and their information  
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input  
- WHEN I click on an email address in the HTML  
- THEN my default email program opens and populates the TO field of the email with the address  
- WHEN I click on the GitHub username  
- THEN that GitHub profile opens in a new tab  
- WHEN I start the application  
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number  
- WHEN I enter the team manager’s name, employee ID, email address, and office number  
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team  
- WHEN I select the engineer option  
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu  
- WHEN I select the intern option  
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu  
- WHEN I decide to finish building my team  
- THEN I exit the application, and the HTML is generated  
  
### HTML Generation:  
  
- All of the user relate html is generated by index.js according to the number employess added. 
- There is first half HTML and last half html that are used as templates. 

### Starting TeamInfoBuilder:  

![Starting TewamInfoBuilder from the command line](./assets/images/starting.png)   
  
### Very First Prompt:  
  
![Very First Prompt Image](./assets/images/firstprompt.png)   
  
### Detailed Instructions Prompt:  
  
![Detailed Instructions Prompt](./assets/images/instructionspng.PNG)   
  
### User Details:  
  
![Filling in manager and Employee details](./assets/images/addingmgremp.png)   


### Sample index.html:  

[Sample Index.html](./index.html)
  
### Thank You:  
    And Enjoy
    
### Angel Sosa
  
