import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import axios from "axios";

function DetailPage() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  //   const url = BASE_URL + "wp/v2/pages/" + id;

  useEffect(function () {
    async function fetchData() {
      const options = {
        method: "GET",
        url: "https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/" + id,
        headers: {
          "X-RapidAPI-Key":
            "6f2217a132msh2bf7fdfe4623212p13c755jsn02881da7ca87",
          "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
        },
      };
      try {
        const response = await axios(options);
        console.log(response.data);
        setPage(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <div className="container">
      {page.map((breed, index) => {
        return (
          <div key={index}>
            <img src={breed.img} alt="image" />
            <h2>{breed.breed}</h2>
            <p>Origin: {breed.origin}</p>
            <p>Coat: {breed.meta.coat}</p>
            <p>Colour: {breed.meta.colour}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DetailPage;
