import getApi from "./helpers/getApi";
import CardInfo from "./components/CardInfo";
import "./styles/App.css";
import { useEffect, useState } from "react";
import SearchCountry from "./components/SearchCountry";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [data, setData] = useState({
    city: "",
    country: "",
    temp: "",
    temp_max: "",
    temp_min: "",
  });

  const [city, setCity] = useState("");

  useEffect(() => {
    getApi(city).then((data) => {
      setData((prevState) => ({
        ...prevState,
        city: data.name,
        country: data.sys.country,
        temp: Math.floor(data.main.temp),
        temp_max: Math.floor(data.main.temp_max),
        temp_min: Math.floor(data.main.temp_min),
      }));
    });
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);
    console.log(e.target[0].value);
    e.target.reset();
  };

  return (
    <>
      <div
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <div>
            {loading ? (
              <ClipLoader
                color={"#36d7b7"}
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <div>
                <SearchCountry handleSubmit={handleSubmit} />
                <CardInfo data={data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
