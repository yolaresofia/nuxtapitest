import axios from "axios";
export default defineEventHandler(async () => {
  try {
    const response = await axios.get(
      "https://api.neoscan.io/api/main_net/v1/get_all_nodes"
    );
 
    const a = new Date();
    return { data: response.data, time: a };
  } catch (err) {
    console.log(err);
  }
});
