import axios from "axios";

 const post = async (query, data) => {
   try {
      const response = await axios.post(`${window.api}${query}`, data);
      return response.data;
   } catch (error) {
      throw error;
   }
};

export default post