<p align="center">
  <a href="" rel="noopener">
 <img width=auto height=200px src="https://www.blackdayz.de/src/img/logo/BlackDayzLogo.png" alt="Project logo"></a>
</p>

<h1 align="center">Changer.js</h1>

<div align="center">

[![Status.](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues.](https://img.shields.io/github/issues/Mittelblut9/ChangerJS.svg)](https://github.com/Mittelblut9/ChangerJs/issues)
[![GitHub Pull Requests.](https://img.shields.io/github/issues-pr/Mittelblut9/ChangerJS.svg)](https://github.com/Mittelblut9/ChangerJs/pulls)

</div>

---

<p align="center">A light weight Library for easy change control for every Website.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Config](#config)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>

<br>

Changer.js is an easy Library to handle client-side input changes.

<br>

## 🏁 Getting Started <a name = "getting_started"></a>

Implement in your Code

```js
<script type="module" src="your/path/to/the/file/changer.js">
```

or

```js
import * from 'your/path/to/the/file/changer.js'
```
<br>

## 🎈 Usage <a name="usage"></a>
<br>
To use the Features your first need to declare all inputs you want to include, that they get recognised by the Script. 
To do this just add to your inputs this Class:
<br><br>

```html
<input class="ChangerJSInput">
```
Additional you must declare the right inputtype.

```
  - checkbox
  - color
  - data
  - datetime-local
  - email
  - file
  - month
  - number
  - password
  - radio
  - range
  - tel
  - text
  - time
  - url
  - week
```
<br>
Optional you can also check if some changes are available. Do do this call the variable:
<br>
<br>

```js
ChangerJSDetector //Changes true = 1 / Changes false = 0
```
to get the current Status.

<br>
To get all Data you must call the "ChangerJSData" variable to get all Data as an Array.

```js
console.log(ChangerJSData);
```
```json
//Output
[{"ID":"84043244105","DivID":"TextInput","OldValues":"Test","NewValues":"Test123"},{"ID":"28896764081","DivID":"FileInput","OldValues":"","NewValues":{}},{"ID":"58460541139","DivID":"WeekInput","OldValues":"2021-W05","NewValues":"2021-W09"},{"ID":"80595015907","DivID":"TelInput","OldValues":"+123456789","NewValues":"+123456789"}]
...
```

## ⚙️ Config <a name="config"></a>
<br>

```js

  ErrorMessages: 1 //Display Error Messages

  InfoMessage: 1 //Display Author Informations

```

<br>

## ⛏️ Built Using <a name = "built_using"></a>

- [JQuery](https://jquery.com) - Library
