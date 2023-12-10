import { useState } from 'react';
import '../index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';



export default function MedTracker() {
  const [formFields, setFormFields] = useState([
    { medicine: '', intakeinterval: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      medicine: '',
      intakeinterval: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }
  
  const [food, setFood] = useState('fruit');
  const [drink, setDrink] = useState('water');
  
  const handleFoodChange = (event) => {
   
      setFood(event.target.value);
   
    };

    const handleDrinkChange = (event) => {
   
      setDrink(event.target.value);
   
    };

    const Dropdown = ({ label, value, options, onChange }) => {

        return (
       
          <label>
       
            {label}
       
            <select value={value} onChange={onChange}>
       
              {options.map((option) => (
       
                <option value={option.value}>{option.label}</option>
       
              ))}
       
            </select>
       
          </label>
       
        );
       
       };

  return (
    <div className="MedTracker">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='medicine'
                placeholder='Medicine Name'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name='intakeinterval'
                placeholder='Intake Interval (per day)'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />

<div>
   
   <Dropdown

     label="What do we eat?"

     options={[

       { label: 'Fruit', value: 'fruit' },

       { label: 'Vegetable', value: 'vegetable' },

       { label: 'Meat', value: 'meat' },

     ]}

     value={food}

     onChange={handleFoodChange}

   />

   <Dropdown

     label="What do we drink?"

     options={[

       { label: 'Water', value: 'water' },

       { label: 'Beer', value: 'beer' },

       { label: 'Wine', value: 'wine' },

     ]}

     value={drink}

     onChange={handleDrinkChange}

   />

 </div>
              
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}

      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>

  );
}


// import React from 'react';
// import Button from 'react-bootstrap/Button';

// // class Medicine {
// //     constructor(name, dosage, frequency) {
//       this.name = name;
//       this.dosage = dosage;
//       this.frequency = frequency;
//       this.timeSinceCreated = "a few seconds";
//     }
//     setTimeSinceCreated() {
//       this.timeSinceCreated = this.timeCreated.fromNow(true);
//     }
//   }
  
//   class MedTracker extends React.Component {
  
//     constructor(props){
//       super(props);
//       this.handleNewMedicineFormSubmission = this.handleNewMedicineFormSubmission.bind(this);
//     }
  
//     handleNewMedicineFormSubmission(event) {
//     event.preventDefault()
//     const { _name, _dosage, _frequency } = this.refs;
//     var newMedicine = new Medicine(_name.value, _dosage.value, _frequency.value);
//     this.props.onNewMedicineCreation(newMedicine);
//     this.props.hideFormAfterSubmission();
//     }
  
//     render() {
//       var formStyle= {
//         marginLeft: "2%",
//         width: "150px"
//       }
//       var buttonStyle= {
//         marginLeft: "2%"
//       }
//       return (
//         <div>
//           <form onSubmit={this.handleNewMedicineFormSubmission}>
//             <input style={formStyle}
//               ref="_name"
//               type="text"
//               id="name"
//               placeholder="Enter Medication"/>
//             <input style={formStyle}
//               ref="_dosage"
//               type="text"
//               id="dosage"
//               placeholder="Enter Dosage"/>
//             <input style={formStyle}
//               ref="_frequency"
//               type="text"
//               id="frequency"
//               placeholder="Enter Frequency"/>
//             <Button style={buttonStyle} type="submit" bsStyle="primary">Add</Button>
//           </form>
//         </div>
//       );
//     }
//   }
  
// //   NewMedicineForm.propTypes = {
// //     onNewMedicineCreation: PropTypes.func,
// //     hideFormAfterSubmission: PropTypes.func
// //   }
  
//   export default MedTracker;


// export default function MedTracker() {

//     return (    
//         <body>
//             <div class="mytabs">
//               <input type="radio" id="tabfree" name="mytabs" checked="checked" />
//               <label for="tabfree">Today</label>
//               <div class="tab">
//                 <h2>Today</h2>
//                 <div class="checklist">
//                   <label class="container">Take MEDICATION A (1 pill) at TIME
//                     <input type="checkbox"></input>
//                     <span class="checkmark"></span>
//                   </label>
//                   <label class="container">TAKE MEDICATION B (2 pills) at TIME and TIME
//                     <input type="checkbox"></input>
//                     <span class="checkmark"></span>
//                   </label>
//                   <label class="container">Pick up MEDICATION C in <b>2</b> days
//                     <input type="checkbox"></input>
//                     <span class="checkmark"></span>
//                   </label>
//                   </div>
//                 </div>
//             </div>
        
//               <input type="radio" id="tabsilver" name="mytabs" />
//               <label for="tabsilver">Long Term</label>
//               <div class="tab">
//                 <h2>Long Term</h2>
//                 <p>See your upcoming medications</p>
//                 <img src="img/google-calendar.png" alt="Google calendar screen" width="900" height="600"></img>
//               </div>
        
//               <input type="radio" id="tabgold" name="mytabs" />
//               <label for="tabgold">Details</label>
//               <div class="tab">
//                 <h2>Details</h2>
//                 <p>See all your medication details here</p>
//                 <ol class="rounded-list">
//                   <li><a href="">MEDICATION A</a></li>
//                   <ol>
//                     <li><a href="">1 time a day (anytime)</a></li>
//                     <li><a href="">2 pills</a></li>
//                     <li><a href="">Note: Take after eating</a></li>
//                   </ol>
//                   <li><a href="">MEDICATION B</a>
//                     <ol>
//                       <li><a href="">1 time a day (anytime)</a></li>
//                       <li><a href="">1 pill</a></li>
//                       <li><a href="">Note: Birth Control</a></li>
//                     </ol>
//                   </li>
//                   <li><a href="">MEDICATION C</a>
//                     <ol>
//                       <li><a href="">1 time a week</a></li>
//                       <li><a href="">1 teaspoon</a></li>
//                       <li><a href="">Note: NONE</a></li>
//                     </ol>
//                   </li>
//                 </ol>
//               </div>
        
        
//           {/* <h1>Enter New Medications Here</h1>
//           <form id="prescription" class="col-lg-5 col-sm-8">
//             <div class="form-group">
//               <label for="">Medicine Name</label>
//               <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="enter medicine name / code" />
//             </div>
//             <div class="form-group">
//               <label for="exampleInputPassword1">Intake Interval</label>
//               <div class="input-group">
//                 <input type="text" class="form-control col-3" placeholder="intake" />
//                 <div class="input-group-append">
//                   <span class="input-group-text" id="basic-addon2">Time(s) per day</span>
//                 </div>
//                 </select>
//               </div>
//             </div>
//             <div class="form-group">
//               <label for="exampleInputPassword1">Dosage</label>
//               <div class="input-group">
//                 <input type="text" class="form-control col-3" placeholder="dosage" />
//                 <select class="form-control" id="exampleFormControlSelect1">
//                   <option selected>Capsule(s)</option>
//                   <option>Pill(s)</option>
//                   <option>Tablespoon(s)</option>
//                   <option>Teaspoon(s)</option>
//                 </select>
//               </div>
//             </div>
//             <div class="form-row">
//               <div class="form-group col-md-6">
//                 <label for="inputEmail4">Start Intake Date</label>
//                 <input type="date" class="form-control" id="startIntake" />
//               </div>
//               <div class="form-group col-md-6">
//                 <label for="inputPassword4">End Intake Date</label>
//                 <input type="date" class="form-control" id="endIntake" />
//               </div>
//             </div>
//             <button type="submit" class="btn btn-primary">Submit</button>
//     </form> */}
        
//         </body>

//     )
// }
//