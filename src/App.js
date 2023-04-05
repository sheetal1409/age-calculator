import './App.css';
import React from "react"


function App() {

  const [dayEntered, setDayEntered] = React.useState('')
  const [monthEntered, setMonthEntered] = React.useState('')
  const [yearEntered, setYearEntered] = React.useState('')
  const [age, setAge] = React.useState('')
  const [days, setDays] = React.useState('')
  const [months, setMonths] = React.useState('')



  function handleDisplay(event) {
    event.preventDefault()

    var d1 = dayEntered;
    var m1 = monthEntered;
    var y1 = yearEntered;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    setDays(d2 - d1);
    setMonths(m2 - m1);
    setAge(y2 - y1);
  }
  return (
    <div className="App">
      <section className='user-entry'>
        <form className='js-form'>
          <div className='input-group'>
            <div className='date-input'>
              <label for="day">Day</label><input className='js-day' type="text" id="day" placeholder='DD' onChange={(e) => setDayEntered(e.target.value)} pattern="^(0?[1-9]|[12][0-9]|3[01])$" required />  <p className='error day-error'></p></div>
            <div className='date-input'>  <label for="month">Month</label>
              <input type="text" className='js-month' id='month' placeholder='MM' onChange={(e) => setMonthEntered(e.target.value)} pattern="\b([1-9]|1[0-2])\b" required />
              <p className='error month-error'></p></div>
            <div className='date-input'> <label for="year">Year</label>
              <input className='js-year' type="text" id="year" placeholder='YYYY' onChange={(e) => setYearEntered(e.target.value)} required />
              <p className='error year-error'></p></div>
          </div>
          <div className='submission'>
            <div className='line'></div>
            <button type="submit" onClick={handleDisplay}><img src="./images/icon-arrow.svg" alt="arrow-to-submit" /></button>
          </div>
        </form>
      </section>
      <section className='age-display'>
        <h1><span>{age}</span> years</h1>
        <h1><span>{months}</span> months</h1>
        <h1><span>{days}</span> days</h1>
      </section>
    </div>
  );
}

export default App;
