class HTTP {
  // Make an HTTP Get Request
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }

  // Make an HTTP Post Request
  async post(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await res.json();
    return resData;
  }

  // Make an HTTP Delete Request
  async delete(url) {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });

    const resData = await "Resource Deleted";
    return resData;
  }
}

export const http = new HTTP();
