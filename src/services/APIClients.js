class APIClients {
  async getFetch(endpoint, headers, params) {
    try {
      const response = await fetch(`http://134.209.238.241/api/${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        params,
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
  async postFetch(endpoint, body, headers, params) {
    try {
      const response = await fetch(`http://134.209.238.241/api/${endpoint}`, {
        // mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(body),
        params,
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}

const apiClient = new APIClients();

export { apiClient };
