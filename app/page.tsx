import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {

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