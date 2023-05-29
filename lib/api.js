export async function getData() 
{
    try {
      const res = await fetch('/api/bill/create'); // Replace with your backend API endpoint
      const json = await res.json();
      return json;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
}
  