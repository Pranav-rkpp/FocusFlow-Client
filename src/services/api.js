import { toast } from "react-toastify";

export const apiRequest = async (url, options = null) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errMessage = await response.json();

      throw new Error(errMessage.message || "Something went wrong");
    }
    // return response;
    return response;
  } catch (err) {
    toast.error(err.message); // Optional toast
    return null;
  }
  // finally {
  //   console.log(errMessage);
  //   return errMessage;
  // }
};
