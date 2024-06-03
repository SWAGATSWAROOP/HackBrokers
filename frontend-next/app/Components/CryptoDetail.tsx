import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function CryptoDetails({ crypto, timeRange }) {
  const [description, setDescription] = useState("");
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (crypto) {
      fetchCryptoData(crypto, timeRange);
    }
  }, [crypto, timeRange]);

  const fetchCryptoData = async (crypto, timeRange) => {
    setLoading(true);
    setError("");
    try {
      // Fetch description
      const descriptionResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto}`);
      setDescription(descriptionResponse.data.description.en);

      // Fetch chart data
      const chartResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: timeRange
        }
      });

      const prices = chartResponse.data.prices;
      const labels = prices.map(price => new Date(price[0]).toLocaleDateString());
      const data = prices.map(price => price[1]);

      setChartData({
        labels,
        datasets: [
          {
            label: `${crypto} Price`,
            data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          }
        ]
      });
    } catch (error) {
      setError("Error fetching crypto data");
      console.error("Error fetching crypto data", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{crypto.toUpperCase()} Details</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Description</h3>
        <p>{description || "No description available."}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Price Chart</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
}
