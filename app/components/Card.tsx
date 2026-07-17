
type CardProps = {
    title: string;
    amount: string;
};

export default function Card({
    title,
    amount,
}: CardProps) {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-gray-500">
                {title}
            </h2>

            <p className="mt-2 text-3xl font-bold">
                {amount}
            </p>
        </div>
    );
}