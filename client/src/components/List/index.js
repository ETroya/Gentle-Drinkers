import React from "react";

// creating list for workers to pull from api and show on site
function List({ beerName, brewery, flavorNotes, abv, range }) {
  return (
    <tr>
      <td className="beer-name text-light">{beerName}</td>
      <td className="brewery text-light">{brewery}</td>
      <td className="flavor-notes text-light">{flavorNotes}</td>
      <td className="abv text-light">{abv}</td>
      <td className="range text-light">{range}</td>
    </tr>
  );
}
export default List;
