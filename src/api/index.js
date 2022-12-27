import Axios from "axios";

//Data API
export async function getData() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=2022-10-01&end_date=2022-10-29&thumbs=true';
  try {
    const { data } = await Axios.get(url);    
    return data;
  } catch (e) {
    console.error('getData error\n', e);
  }
};
