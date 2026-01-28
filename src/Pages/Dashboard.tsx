export const Dashboard = () => {

  type Card = {
    title: string;
    value: number;
  };

  const cards: Card[] = [
    { title: "Books Borrowed", value: 0 },
    { title: "Books Available", value: 120 },
    { title: "Late Returns", value: 3 },
  ];

  return (
   <div className="flex flex-wrap gap-6 z-40 p-9">
      {cards.map((card: Card, index: number) => (
        <div key={index} className="card w-96 bg-base-100 shadow-sm h-52">
          <div className="card-body flex flex-col justify-center items-center">
            <h2 className="text-center text-xl">{card.title}</h2>
            <p className="text-3xl font-bold">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
