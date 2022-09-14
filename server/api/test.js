import axios from "axios";
export default defineEventHandler(async () => {
  try {
    const response = await axios.get(
      "https://api.neoscan.io/api/main_net/v1/get_all_nodes"
    );
    console.log("new Date()")
    const a = new Date();
    return { time: a };
  } catch (err) {
    console.log(err);
  }
});
