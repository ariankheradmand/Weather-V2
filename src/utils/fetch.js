const API_key = "Fill this with your API key";

export const current_data = async (city_name) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
    }
    const data = await response.json();
    return data;
} 


export const fiveDay_data = async (city_name) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${API_key}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
    }
    const data = await response.json();
    return data;
} 