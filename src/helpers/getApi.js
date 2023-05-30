const API_KEY = "ad069584070cd9957f9d50d6782167b7";
const getApi = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        city || "Buenos aires"
      }&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert("No se pudo encontrar lo solicitado.");
    throw error;
  }
};

export default getApi;
