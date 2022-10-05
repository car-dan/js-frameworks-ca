import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import React from "react";

function BreedList() {
  const [breeds, Setbreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getBreeds() {
      const options = {
        method: "GET",
        url: "https://dog-breeds2.p.rapidapi.com/dog_breeds",
        headers: {
          "X-RapidAPI-Key":
            "6f2217a132msh2bf7fdfe4623212p13c755jsn02881da7ca87",
          "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
        },
      };
      try {
        const response = await axios(options);
        console.log(response.data);
        Setbreeds(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getBreeds();
  }, []);

  if (loading) return <div>Loading breeds....</div>;
  if (error) return <div>{}</div>;

  return (
    <div className="breeds">
      {breeds.map((breed, index) => {
        if (index < 15) {
          return (
            <div key={index}>
              <Link to={`/${breed.breed}`}>
                <img src={breed.img} alt="image" />
                <h2>{breed.breed}</h2>
                <p>{breed.origin}</p>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
}

export default BreedList;
