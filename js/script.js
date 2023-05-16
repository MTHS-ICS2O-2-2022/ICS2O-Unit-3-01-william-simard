// Copyright (c) 2023 william simard All rights reserved
//
// Created by: william 
// Created on: may 2023
// This file contains the JS functions for index.html
function calculate() {
  // delcare variables
  const aBase = parseInt(document.getElementById("a-base").value)
  const bBase = parseInt(document.getElementById("b-base").value)
  const height = parseInt(document.getElementById("height").value)

  // calculate
  const area = (aBase + bBase) / 2 * height

  // output
  document.getElementById("area").innerHTML = "The area is: " + area + " cm²"
}