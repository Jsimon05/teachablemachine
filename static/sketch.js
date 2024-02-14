// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Global variable to store the classifier
let classifier;

// Label (start by showing listening)
let label = "Who is the Player";

// Teachable Machine model URL:
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/Hsy5uGaSm/model.json';
function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModelURL);
}

function setup() {

  createCanvas(windowWidth, windowHeight); // Full screen
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background(0);

  // Cool Font
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont('Impact'); // Set a cool font
  text(label, width / 2, height / 2);

  // Subtext
  textSize(16);
  textAlign(CENTER, TOP);
  text("I wonder who the player is...", width / 2, height / 2 + 60);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  // The results are in an array ordered by confidence.
  //console.log(results[0]);
  label = results[0].label;

  // Check if the recognized sound is whatever you want (e.g., "clap")
  if (label === "heung min son") {
    window.location.href = 'chargers';
  } else if (label === "cristian romero") {
      window.location.href = 'romero';
  }
}

