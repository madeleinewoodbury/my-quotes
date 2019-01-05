class HTTP {
  // Make an HTTP Get Request
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }
}

export const http = new HTTP();
