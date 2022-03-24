const getResponseData = async (
  url,
  { method = "GET", body = null, contentType = null, ...options } = {}
) => {
  const innerMethod = method.toUpperCase();
  const requestOptions = {
    method: innerMethod,
    headers: {
      "Content-Type":
        contentType !== null
          ? contentType
          : typeof body === "object"
          ? "application/json"
          : "text/plain",
    },
    ...options,
  };

  if (innerMethod !== "GET") {
    requestOptions.body =
      typeof body === "object" ? JSON.stringify(body) : body;
  }

  const response = await fetch(url, requestOptions);
  let data;
  try {
    data = await response.json();
  } catch (e) {
    data = await response.text();
  }
  return {
    response,
    data,
  };
};

export { getResponseData };
