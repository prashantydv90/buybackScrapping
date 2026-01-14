import { useEffect, useState } from "react";
import { getBuybacks, syncBuybacks } from "../api";

export default function BuybackTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
    const interval = setInterval(load, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  async function load() {
    const res = await getBuybacks();
    setData(res.data);
  }

  async function insertData() {
    try {
      setLoading(true);
      await syncBuybacks();   // 🔥 trigger backend fetch
      await load();           // refresh table after insert
    } catch (err) {
      console.error("Sync failed:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* <button onClick={insertData} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Latest Announcements"}
      </button> */}

      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Company</th>
            <th>Subject</th>
            <th>Broadcast Time</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d._id}>
              <td>{d.symbol}</td>
              <td>{d.companyName}</td>
              <td>{d.desc}</td>
              <td>{new Date(d.broadcastAt).toLocaleString()}</td>
              <td>
                {d.pdfUrl && (
                  <a
                    href={d.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
