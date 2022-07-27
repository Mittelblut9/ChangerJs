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
<script src="your/path/to/the/file/changer.js" type="module" async defer>
or
<script src="https://blackdayz.de/js/changerjs" type="module" async defer>
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

<hr>

<h3><strong>To get the newest data when the user changed the input values</strong></h3>
<i>Note: This event will be triggered when the user left the input or pressed enter</i>
<br>

```js
window.addEventListener('onChanges', function(evt) {
  const {changes, isDataChanged} = evt.detail;
});
```

<br>

```js
changes //Object - With all informations
isDataChanged // Boolean
```

<br>

```js
//Output of changes

Object { changerID: "", divID: "", OldValue: "", NewValue: "" }
​
```

<br>

## ⚙️ Config <a name="config"></a>
<br>

```js

  ErrorMessages: true //Display Error Messages

  InfoMessage: true //Display Author Informations

```

<br>

## ⛏️ Built Using <a name = "built_using"></a>

- Vanilla Javascript
