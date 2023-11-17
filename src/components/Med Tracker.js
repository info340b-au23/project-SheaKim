import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MedForm(props) {
    return (
    <section>
        <div class="mytabs">
            <input type="radio" id="tabfree" name="mytabs" checked="checked">
            <label for="tabfree">Today</label>
        <div class="tab">
            <h2>Today</h2>
            <div class="checklist">
                <label class="container">Take MEDICATION A (1 pill) at TIME
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label><br>
          <label class="container">TAKE MEDICATION B (2 pills) at TIME and TIME
            <input type="checkbox">
            <span class="checkmark"></span>
          </label><br>
          <label class="container">Pick up MEDICATION C in <b>2</b> days
            <input type="checkbox">
            <span class="checkmark"></span>
          </label><br>
        </div>
      </div>

      <input type="radio" id="tabsilver" name="mytabs">
      <label for="tabsilver">Long Term</label>
      <div class="tab">
        <h2>Long Term</h2>
        <p>See your upcoming medications</p>
        <img src="img/google-calendar.png" alt="Google calendar screen" width="900" height="600"></img>
      </div>

      <input type="radio" id="tabgold" name="mytabs">
      <label for="tabgold">Details</label>
      <div class="tab">
        <h2>Details</h2>
        <p>See all your medication details here</p>
        <ol class="rounded-list">
          <li><a href="">MEDICATION A</a></li>
          <ol>
            <li><a href="">1 time a day (anytime)</a></li>
            <li><a href="">2 pills</a></li>
            <li><a href="">Note: Take after eating</a></li>
          </ol>
          <li><a href="">MEDICATION B</a>
            <ol>
              <li><a href="">1 time a day (anytime)</a></li>
              <li><a href="">1 pill</a></li>
              <li><a href="">Note: Birth Control</a></li>
            </ol>
          </li>
          <li><a href="">MEDICATION C</a>
            <ol>
              <li><a href="">1 time a week</a></li>
              <li><a href="">1 teaspoon</a></li>
              <li><a href="">Note: NONE</a></li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  </section>

)

}