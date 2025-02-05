import React from "react";

const ClubPage = async () => {
  const random = Math.round(Math.random() * 1000);
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await data.json();

  if (random == 500) {
    throw Error("Xatolik ooopssss");
  }

  return (
    <div className="w-[300px] relative h-[300px] bg-[#2d9abe] p-4 flex-col flex items-center justify-center overflow-auto ">
      {result.map((val) => (
        <div key={val.id} className="grid grid-cols-4 items-center gap-3">
          <p>{val.id}</p>
          <p>{val.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ClubPage;
