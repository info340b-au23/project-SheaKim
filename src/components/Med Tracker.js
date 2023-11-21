import React from 'react';

export default function MedTracker() {

    return (    
        <body>
            <div class="mytabs">
              <input type="radio" id="tabfree" name="mytabs" checked="checked" />
              <label for="tabfree">Today</label>
              <div class="tab">
                <h2>Today</h2>
                <div class="checklist">
                  <label class="container">Take MEDICATION A (1 pill) at TIME
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">TAKE MEDICATION B (2 pills) at TIME and TIME
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">Pick up MEDICATION C in <b>2</b> days
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                  </label>
                  </div>
                </div>
            </div>
        
              <input type="radio" id="tabsilver" name="mytabs" />
              <label for="tabsilver">Long Term</label>
              <div class="tab">
                <h2>Long Term</h2>
                <p>See your upcoming medications</p>
                <img src="img/google-calendar.png" alt="Google calendar screen" width="900" height="600"></img>
              </div>
        
              <input type="radio" id="tabgold" name="mytabs" />
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
        
        
          {/* <h1>Enter New Medications Here</h1>
          <form id="prescription" class="col-lg-5 col-sm-8">
            <div class="form-group">
              <label for="">Medicine Name</label>
              <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="enter medicine name / code" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Intake Interval</label>
              <div class="input-group">
                <input type="text" class="form-control col-3" placeholder="intake" />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">Time(s) per day</span>
                </div>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Dosage</label>
              <div class="input-group">
                <input type="text" class="form-control col-3" placeholder="dosage" />
                <select class="form-control" id="exampleFormControlSelect1">
                  <option selected>Capsule(s)</option>
                  <option>Pill(s)</option>
                  <option>Tablespoon(s)</option>
                  <option>Teaspoon(s)</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Start Intake Date</label>
                <input type="date" class="form-control" id="startIntake" />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">End Intake Date</label>
                <input type="date" class="form-control" id="endIntake" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
    </form> */}
        
        </body>

    )
}