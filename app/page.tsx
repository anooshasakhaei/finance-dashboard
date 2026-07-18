"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {

  const [count, setCount] = useState(0)

  const cards = [
    {
      title: "Balance",
      amount: "$12,500",
    },
    {
      title: "Income",
      amount: "$4,200",
    },
    {
      title: "Saving",
      amount: "$1,355",
    },
    {
      title: "Investment",
      amount: "$8,500",
    }
  ];

  return (
    <>
      <Navbar />

      <main className="p-10">

        <h2 className="mb-6 text-2xl font-bold">
          {
            count === 0 ? 'No Click Yet'
              : `Clicked:${count}`
          }
        </h2>

        <button onClick={() => setCount(count + 1)}
          className="mb-6 rounded bg-blue-600 px-4 py-2 text-white"
        >
          Click me
        </button>

        <div className="grid gap-6 md:grid-cols-3">
          {
            cards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                amount={card.amount}
              />
            ))
          }
        </div>
      </main>
    </>
  );
}