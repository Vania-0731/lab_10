import { createContext, useState } from "react";

export const SerieContext = createContext();

export function SerieProvider({ children }) {
  const [series, setSeries] = useState([
    { cod: 1, nom: "Friends", cat: "Comedy", img: "friends.png" },
    { cod: 2, nom: "Law & Order", cat: "Drama", img: "law-and-order.png" },
    { cod: 3, nom: "The Big Bang Theory", cat: "Comedy", img: "the-big-bang.png" },
    { cod: 4, nom: "Stranger Things", cat: "Horror", img: "stranger-things.png" },
    { cod: 5, nom: "Dr. House", cat: "Drama", img: "dr-house.png" },
    { cod: 6, nom: "The X-Files", cat: "Drama", img: "the-x-files.png" },
  ]);

  return (
    <SerieContext.Provider value={{ series, setSeries }}>
      {children}
    </SerieContext.Provider>
  );
}
