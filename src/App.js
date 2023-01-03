import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  var cardArray = [
    {
      img: "https://m.media-amazon.com/images/I/81ABckNfDjL._AC_SL1500_.jpg",
      title: "Lightsaber Chopsticks",
      description:
        "Lightsaber Chopsticks Light Up - LED Glowing Light Saber Star Wars Chop Sticks - Reusable Sushi Lightup Sabers Chopstick Set Of 1 Blue Pair",
      price: "$11.69",
    },

    {
      img: "https://m.media-amazon.com/images/I/61lcR5TRJxL._AC_UL320_.jpg",
      title: "Dead Fred Pen Holder",
      description:
        "Dead Fred Pen Holder | Desk Accessories | Pencil Holder | Desk Organizer | Office Decor",
      price: "$12.69",
    },

    {
      img: "https://m.media-amazon.com/images/I/617rPAwIz4L._AC_UL320_.jpg",
      title: "Remote Control Cockroach",
      description:
        "Remote Control Cockroach RC Cockroach - Realistic, Robotic, Creepy, Crawly, and Scary RC Insect",
      price: "19.69",
    },
  ];

  var newCardArray = cardArray.map((item) => {
    return (
      <Main
        title={item.title}
        img={item.img}
        description={item.description}
        price={item.price}
      />
    );
  });

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "rgb(0, 15, 27)" }}>
        <div className="container-fluid d-sm-flex flex-wrap">{newCardArray}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
