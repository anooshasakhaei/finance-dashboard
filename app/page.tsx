"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {

  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState("All");

  const cards = [
    {
      title: "Balance",
      amount: "$12,500",
      category: "Saving",
    },
    {
      title: "Income",
      amount: "$4,200",
      category: "Income",
    },
    {
      title: "Saving",
      amount: "$1,355",
      category: "Saving",
    },
    {
      title: "Expense",
      amount: "$8,500",
      category: "Expense",
    }
  ];

  return (
    <>
      <Navbar />

      <main className="p-10">

        <div className="mb-6 flex gap-2">
          <button onClick={() => setSelectedCategory("All")}
            className={
              selectedCategory === "All"
                ? "rounded-lg bg-blue-600 px-4 py-2 text-white"
                : "rounded-lg bg-gray-200 px-4 py-2"
            }>All</button>
          <button onClick={() => setSelectedCategory("Income")}
            className={
              selectedCategory === "Income"
                ? "rounded-lg bg-blue-600 px-4 py-2 text-white"
                : "rounded-lg bg-gray-200 px-4 py-2"
            }>Income</button>
          <button onClick={() => setSelectedCategory("Expense")}
            className={
              selectedCategory === "Expense"
                ? "rounded-lg bg-blue-600 px-4 py-2 text-white"
                : "rounded-lg bg-gray-200 px-4 py-2"
            }>Expense</button>
          <button onClick={() => setSelectedCategory("Saving")}
            className={
              selectedCategory === "Saving"
                ? "rounded-lg bg-blue-600 px-4 py-2 text-white"
                : "rounded-lg bg-gray-200 px-4 py-2"
            }>Saving</button>
        </div>

        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />



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
            cards.filter((card) =>
              card.title.toLowerCase().includes(search.toLocaleLowerCase())
            )

              .filter((card) =>
                selectedCategory === 'All' ||
                card.category === selectedCategory
              )


              .map((card) => (
                <Card
                  key={card.title}
                  title={card.title}
                  amount={card.amount}
                />
              ))
          }
        </div>
      </main >
    </>
  );
}