// components/BuybackTable.jsx
import { useEffect, useState } from "react";
import { getBuybacks } from "../api";

export default function BuybackTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
    const interval = setInterval(load, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  async function load() {
    const res = await getBuybacks();
    setData(res.data);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Company</th>
          <th>Subject</th>
          <th>Broadcast Time</th>
          <th>Report</th>
          <th>XBRL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d._id}>
            <td>{d.symbol}</td>
            <td>{d.companyName}</td>
            <td>{d.subject}</td>
            <td>{new Date(d.broadcastAt).toLocaleString()}</td>
            <td>
              {d.pdfUrl && (
                <a href={d.pdfUrl} target="_blank" rel="noopener noreferrer">
                  PDF
                </a>
              )}
            </td>
            <td>
              {d.xbrlUrl && (
                <a href={d.xbrlUrl} target="_blank" rel="noopener noreferrer">
                  XBRL
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

