import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function Check() {
  if (Cookies.get("pfp")) {
    window.location.href = "/bio";
  } else if (!Cookies.get("name")) {
    window.location.href = "/quiz";
  }
}

async function Gen() {
  // Extract from cookies
  const desc = Cookies.get("desc");
  const name = Cookies.get("name");
  const email = Cookies.get("email");

  const response = await axios.post("https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-83e381f2-30dd-4e1c-8476-61db3f034d9a/bio/create", {
    "name": name,
    "email": email,
    "desc": desc,
  }, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response.data);

  // Extract "description" from response
  const description = response.data.description;

  // Set cookie
  Cookies.set("description", description);

  // Generate image
  const pfpResponse = await axios.post("https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-83e381f2-30dd-4e1c-8476-61db3f034d9a/bio/pfp", {
    "name": name,
    "email": email,
    "desc": desc,
    "description": Cookies.get("description"),
  }, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const pfpUrl = pfpResponse.data.pfp;

  // Set cookie
  Cookies.set("pfp", pfpUrl);
  console.log(pfpUrl);

  window.location.href = "/bio";
}

function Placeholder() {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

function Generate() {
  useEffect(() => {
    Gen();
  }, []);

  return (
    <>
      <Check />
      <Placeholder />
    </>
  );
}

export default Generate;
