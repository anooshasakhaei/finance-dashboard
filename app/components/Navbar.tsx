

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between border-b bg-white px-8 py-5">
            <h1 className="text-2xl font-bold">
                Finance Dashboard
            </h1>

            <div className="flex gap-6 text-gray-600">
                <a href="/dashboard">Dashboard</a>
                <a href="/transactions">Transactions</a>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}