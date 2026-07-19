"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {


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

  const categories = [
    "All",
    "Income",
    "Expense",
    "Saving",
  ];

  const filteredCards = cards
    .filter((card) =>
      card.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (card) =>
        selectedCategory === "All" ||
        card.category === selectedCategory
    );

  return (
    <>
      <Navbar />

      <main className="p-10">

        {
          categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "rounded-lg bg-blue-600 px-4 py-2 text-white"
                  : "rounded-lg bg-gray-200 px-4 py-2"
              }
            >
              {category}
            </button>
          ))
        }

        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <p className="mb-4 text-sm text-gray-500">
          Showing {filteredCards.length} of {cards.length} cards
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {filteredCards.length === 0 && (
            <p className="py-10 text-center text-gray-500">
              🔍 No cards found. Try another search.
            </p>
          )}
          {filteredCards.map((card) => (
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