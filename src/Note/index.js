import { useState, useEffect } from "react";

export const NotePage = () => {
  const [accessToken, setAccessToken] = useState("");

  // Retrieve an access token if required
  useEffect(() => {
    const getAccessToken = async () => {
      // Send request
      const url = "https://us.battle.net/oauth/token";
      const body = getBody();
      const headers = getHeaders();
      const res = await fetch(url, { method: "POST", body, headers });

      // Handle errors
      if (!res.ok) {
        console.log(`Access token request failed: "${res.statusText}"`);
        return new Error(res.statusText);
      }

      // Store token
      const { access_token } = await res.json();
      setAccessToken(access_token);
    };

    if (!accessToken) getAccessToken();
  }, [accessToken]);

  // Create headers for basic auth
  const getHeaders = () => {
    const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;
    const auth = `${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`;
    const basicAuth = window.btoa(auth);

    return {
      authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    };
  };

  // Build request body for multipart form data
  const getBody = () => {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    return params;
  };

  return `Editor`;
};
