import React from "react";

const layoutUser = ({ club, team }) => {
  return (
    <section>
      <div className="flex items-center mt-[40px] ml-[50px] justify-center gap-4">
        {club}
        {team}
      </div>
    </section>
  );
};

export default layoutUser;
