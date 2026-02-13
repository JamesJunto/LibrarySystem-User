
export const useSendData = () => {
  const sendData = async (url: string, data: { book_id: number }) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      console.log(data);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      return result;
    } catch (err: unknown) {
      console.error("Error sending data:", (err as Error).message);
    }
  };

  return { sendData };
};
