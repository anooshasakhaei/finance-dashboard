"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {


  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cards, setCards] = useState([
    {
      title: "Balance",
      amount: "$12,500",
      category: "Saving",
      id: 1
    },
    {
      title: "Income",
      amount: "$4,200",
      category: "Income",
      id: 2
    },
    {
      title: "Saving",
      amount: "$1,355",
      category: "Saving",
      id: 3
    },
    {
      title: "Expense",
      amount: "$8,500",
      category: "Expense",
      id: 4
    }
  ])

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<
    "Income" | "Expense" | "Saving"
  >("Expense");

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
    )

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTransaction = () => {
    if (!title || !amount) return
    const newCard = {
      title,
      amount,
      category,
      id: Date.now()
    };
    setCards([...cards, newCard])
    setTitle('')
    setAmount('')
    setCategory("Expense");
    setIsModalOpen(false);
  };

  const handleDeleteTransaction = (id: number) => {
    setCards(cards.filter((card) => card.id !== id))
  }

  const [editingId, setEditingId] = useState<number | null>(null);
  console.log(editingId);

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
                  ? "rounded-lg bg-blue-600 px-4 py-2 text-white m-1.5"
                  : "rounded-lg bg-gray-200 px-4 py-2 m-1.5"
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

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-400"
        >
          + Add Transaction
        </button>


        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">

            <div className="w-[400px] rounded-xl bg-white p-6 shadow-xl">


              <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-lg border p-2" />

              <input
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="rounded-lg border p-2"
              />

              <select value={category}
                onChange={(e) => e.target.value}
                className="rounded-lg border p-2">
                <option>Income</option>
                <option>Expense</option>
                <option>Saving</option>
              </select>

              <button
                className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-300"
                onClick={handleAddTransaction}

              >
                Save Transaction
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg bg-gray-300 px-4 py-2"
              >
                Cancel
              </button>



            </div>
          </div>
        )}


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
              key={card.id}
              title={card.title}
              amount={card.amount}
              onDelete={() => handleDeleteTransaction(card.id)}
              onEdit={() => setEditingId(card.id)}
            />
          ))

          }
        </div>
      </main >
    </>
  );
}