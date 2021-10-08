const IP_TO_LOCATION_KEY = process.env.IP_TO_LOCATION_KEY;

async function fetchCountry(ip: string) {
  if (!ip) {
    return 'GLOBAL'
  }

  const endpoint = `https://api.ip2location.com/v2/?ip=${ip}&key=${IP_TO_LOCATION_KEY}&package=WS1`;
  const response = await fetch(endpoint, { method: "GET" });
  const data = await response.json();

  return data?.country_code || 'GLOBAL';
}

export default fetchCountry;
