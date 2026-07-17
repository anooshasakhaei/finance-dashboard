"use client";

type CardProps = {
    title: string;
    amount: string;
};

export default function Card({
    title,
    amount,
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
        </div>
    );
}