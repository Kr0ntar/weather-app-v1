"use strict";

var searchButton = document.querySelector('button');
var searchCity = document.querySelector('#city');
var searchBox = document.querySelector('#search');

var loadingText = document.querySelector('#load');
var weatherBox = document.querySelector('#weather');

var weatherCity = weatherBox.firstElementChild;
var weatherDescription = document.querySelector('#weatherDescription');
var weatherTemperature = weatherBox.lastElementChild;

var showWeatherBtn = document.querySelector('button');
var body = document.querySelector('body');
var html = document.querySelector('html');
var backBtn = document.querySelector('#backBtn');
var tempBtn = document.querySelector('#convertTemp');