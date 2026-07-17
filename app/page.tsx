import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Balance"
            amount="$12,500"
          />

          <Card
            title="Income"
            amount="$4,200"
          />

          <Card
            title="Saving"
            amount="$1,355"
          />
        </div>
      </main>
    </>
  );
}