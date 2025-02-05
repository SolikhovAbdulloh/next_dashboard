import React from "react";

const About = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const res = await data.json();
  console.log(res);

  return (
    <div>
      About page | UI
      <div className="grid-cols-4 items-center  w-full grid overflow-auto gap-5 ml-5 justify-center h-[500px] ">
        {res.map((value) => (
          <div className="mt-[50px]" key={value.id}>
            <img className="w-[200px] h-[200px]" src={value.image} alt={value.title} />
            <p>category:{value.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
