const API_key = "7f54b4effe46c0a23400f161d53e6a7c";

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