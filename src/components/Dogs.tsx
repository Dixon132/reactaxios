import { useState } from "react";
import { fetchModels } from "../services/api";
import "./modelo.css";

const Dogs = () => {
  const [dogImage, setDogImage] = useState<string>("");

  const fetchDog = async () => {
    try {
      const data = await fetchModels(); // tu función de API
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  return (
    <div className="dogs-container">
      <h2 className="dogs-title"> Perros Aleatorios</h2>
      <button className="dogs-button" onClick={fetchDog}>
        Mostrar otro perro
      </button>
      <div className="dogs-image-container">
        {dogImage && <img src={dogImage} alt="Random Dog" className="dogs-image" />}
      </div>
    </div>
  );
};

export default Dogs;
