# MatchEm!

MatchEm! is a familiar game in which users win by matching all the number pairs. Try increasing the difficulty and see how you do!

## Getting Started

If you would just like to play the game, you can access the web application @ https://jungwoos99.github.io/MatchEm/

### Installation

In order to install this application and run it on your computer, you will need a text editor. I developed this project in Visual Studio Code. (https://visualstudio.microsoft.com/downloads/)

Once you have access to a text editor, download the zip of this repo and open the zip inside of the text editor.

### Running the application

Once you have downloaded and opened the zip of this repo in your text editor, open a terminal window in the text editor. 

You must install Node Package Manager (NPM) in order to be able to run the application. To download NPM, enter the following command into the terminal window. 
```
npm install
```
To check if NPM has successfully been installed, enter this command, which will display the version of NPM that has been installed.

```
npm -v
```

A successful install should return with a line that looks similar to this.
```
8.19.0
```

Once you've successfully installed NPM, you can now run the application using this command.
```
npm start
```

### Built with

* [React/ Redux Toolkit] - The libraries used to build the web application.

### To-do

* Hints: Provide a button that will quickly reveal and hide the number values of all boxes.
* Marathon Mode: Once a board has been successfully completed, a new board is displayed.
* Points System: Implement a points system where users must maintain a score greater than 0 to continue marathon mode. Misclicks deduct points.
