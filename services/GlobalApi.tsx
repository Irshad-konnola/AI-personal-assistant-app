// import axios from "axios";
// export const GetAuthUserData=async(token:string )=>{
//  const userInfo = await axios.get(
//       'https://www.googleapis.com/oauth2/v3/userinfo',
//       { headers: { Authorization: 'Bearer'+ token } },
//     );

//       return userInfo.data; // ✅ return the actual user info

// }

import axios from "axios";

export const GetAuthUserData = async (token: string) => {
  try {
    const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Google API response:", res.data); // ✅ Debug log

    return res.data;
  } catch (error) {
    console.error("Error fetching Google user info:", error);
    return null;
  }
};
