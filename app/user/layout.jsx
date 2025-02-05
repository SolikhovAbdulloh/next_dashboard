import React from "react";

const layoutUser = ({ club, team }) => {
  return (
    <section className="mt-[60px]">
        <p className="text-blue-800 text-center text-[30px]">Parallel Routes in Next js</p>
      <div className="flex items-center mt-[40px] ml-[50px] justify-center gap-4">

        {club}
        {team}
      </div>
    </section>
  );
};

export default layoutUser;
