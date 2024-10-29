import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App () {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header () {
  return (
    <header className="header">
      <h1>Fast React Pizza Company</h1>
    </header>
  );
}
function Menu () {
  const pizzas = pizzaData;

  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menue</h2>
      {numPizzas > 0
        ? <ul className="pizzas">
            {pizzas.map (pizza => <Pizza PizaaObj={pizza} key={pizza.name} />)}
          </ul>
        : <p>No pizzas are available right now.</p>}
    </main>
  );
}

function Pizza({PizaaObj}) {
  return (
    <li className={`pizza ${PizaaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={PizaaObj.photoName} alt={PizaaObj.name} />
      <div>
        <h3>{PizaaObj.name}</h3>
        <p>{PizaaObj.ingredients}</p>
        {PizaaObj.soldOut
          ? <span>Sold out</span>
          : <span>{PizaaObj.price}</span>}
      </div>
    </li>
  );
}

function Footer () {
  const hour = new Date ().getHours ();
  const openHour = 0;
  const closehour = 24;
  const isOpen = hour >= openHour && hour <= closehour;
  console.log (isOpen);

  console.log (hour);
  return (
    <footer className="footer">
      {isOpen
        ? <Order closehour={closehour} openHour={openHour} />
        : <p>
            we are happy to welcome you between {openHour}:00 and {closehour}:00
          </p>}
    </footer>
  );
}

function Order({openHour, closehour}) {
  return (
    <div>
      <p>
        we are open from
        {' '}
        {openHour}
        :00 to
        {' '}
        {closehour}
        :00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
