"use client";

type CardProps = {
    title: string;
    amount: string;
    onDelete: () => void;
};

export default function Card({
    title,
    amount,
    onDelete,
}: CardProps) {
    return (
        <div
            onClick={() => console.log(title)}
            className="rounded-xl border bg-white p-6 shadow-sm cursor-pointer shadow-sm transition hover:shadow-lg"
        >
            <h2 className="text-gray-500">
                {title}
            </h2>

            <p className="mt-2 text-3xl font-bold">
                {amount}
            </p>
            <button
                onClick={onDelete}
                className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600 active:scale-95"
            >
                Delete
            </button>
        </div>
    )
}
