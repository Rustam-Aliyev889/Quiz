<h1 align="center">Quiz</h1>
[View the live project here.](https://rustam-aliyev889.github.io/Quiz/index.html)
<h2 align="center"><img src="static/images/screenshots/quiz-mock-up.jpg"></h2>

# What the Project is about? 
The project is a car related quiz. It consists of 13 questions and 4 answers for each question.You have 15 seconds for each question. The goal of the quiz is to test your knowledge about cars in addition to find out waht car you should be driving.  :-)

Altogether there are 4 web pages.

-   ## User stories

    -   ### First Time Visitor Goals

        1. As a First Time Visitor, I want to be able to understand how the website works. 
        2. As a First Time Visitor, I want to be able to understand what is the purpose of the website.
        3. As a First Time Visitor, I want to be able to understand main rules.<br>
    
    <img src="/static/images/screenshots/quiz-mock-up.jpg"><br>

    <img src="/static/images/screenshots/quiz_p.png"><br>

    -   ### Returning Visitor Goals

        1. As a Returning Visitor, I want them to be able to save their score.
        2. As a Returning Visitor, I want them to be able to compare their score with other players.<br>
   
    <img src="/static/images/screenshots/enf_p.png"><br>

    <img src="/static/images/screenshots/quiz_lb.png"><br>


    -   ### Frequent User Goals
        1. As a Frequent User, I want them to enjoy the website. 
        2. As a Frequent User, I want them to encourage others to improve their knowledge about cars.<br>

# Web pages
### Main(Index.html) page
The Main page is the landing page which gives you two options. You can either start the quiz or check the highscores.
### Quiz page
Self-explanatory.
### End page
The End page shows you your final score and a car you deserve. It also gives you the opportunity to save your score, play the quiz again or go to the main page.
### High Score 
This page display leaderboard(both scores and the names of the players). You can go to the main page form it as well.

## Wireframes 

<br><img src="/static/images/wireframes/quiz_pc.png"><br>

-   PC Wireframe- [View](https://github.com/Rustam-Aliyev889/Quiz/blob/main/static/images/wireframes/quiz_pc.png)
-   Tablet Wireframe - [View](https://github.com/Rustam-Aliyev889/Quiz/blob/main/static/images/wireframes/quiz_tablet.png)
-   Phone Wireframe - [View](https://github.com/Rustam-Aliyev889/Quiz/blob/main/static/images/wireframes/quiz_phone.png)<br>


# Testing
## Testing web page  links
|Test Case| Test|Expected Outcome|Actual Outcome|Comment|
| ------ | ------ |------ |------ |------ |
|1|   Main page links  functional test    |  launch Main page        |All links launched Main page|n/a|
|2|  Quiz  links functional test     | launch Quiz page          |all links launched Quiz page|n/a|
|3|  End links funtional test for all pages    |   launch End page        |All links launched |n/a|
|4| HighScores links functional tests for all pages     | launch HighScores page          |All links launched correctly|n/a|


## Browser support testing
The following web browsers were used to test the display of the website including the functionality of the contact us form:
###### Edge
###### Chrome
###### Opera
###### Safari

## Language validation
Validation of scripting languages were validated using the following:
•       HTML validation using HTML validator (W3C validator) at https://jigsaw.w3.org/css-validator/
•       JavaScript validated at https://esprima.org/demo/validate.html
•       CSS validated at https://jigsaw.w3.org/css-validator/
# Bugs
|Bug|Comment|
| ------ | ------ |
|Pages were not linked correctly as they were linking to the wrong pages or didn't work at all|This was corrected and recorded in the Test log|
|The timer didn't start again eaach time you go to a new question |Code was included to correct it. Subsequent test verified correct operation of the timer|
|Final result wasn't given at the end of the quiz|This was fixed and tested to ensure it works|

# Deployment
Website pages are standard HTML + CSS pages and HTML templates. Java Script is used for logic.

# Where can it be found on GitHub? 
The GitHub link for the project is - gh repo clone Rustam-Aliyev889/Quiz

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

