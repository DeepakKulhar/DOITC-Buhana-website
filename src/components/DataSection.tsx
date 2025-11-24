// src/components/data-section.tsx

import React, { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type Row = Record<string, string | number | null>;

export default function DataSection() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<Row[]>([]);
  const [query, setQuery] = useState("");
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);

  // ⭐ Your Google Sheet (TSV output)
  const SHEET_TSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTh335SkKfhPdbWq7VUX9V3nZqfnNtsq8YEjZQpbFax1R7g4Jf0iZZXbiK0tRXN_O7O5Lmn8Hdhiu-/pub?output=tsv";

  // Fetch and parse the TSV data
  const fetchSheet = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(SHEET_TSV_URL);
      const text = await res.text();

      const lines = text.trim().split("\n").map((line) => line.split("\t"));

      const header = lines[0];
      const dataRows = lines.slice(1);

      setColumns(header);

      const parsedRows: Row[] = dataRows.map((line) => {
        const obj: Row = {};
        header.forEach((col, i) => (obj[col] = line[i] ?? ""));
        return obj;
      });

      setRows(parsedRows);
      setLastUpdated(Date.now());
    } catch (err: any) {
      console.error(err);
      setError("Failed to load Google Sheet.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSheet();
  }, []);

  // Filter logic
  const filteredRows = useMemo(() => {
    if (!query) return rows;

    const q = query.toLowerCase();
    return rows.filter((row) =>
      columns.some((col) =>
        String(row[col] ?? "").toLowerCase().includes(q)
      )
    );
  }, [rows, query, columns]);

  // --------------------------
  // ⭐ PROFESSIONAL EXCEL EXPORT
  // --------------------------
  const exportExcel = () => {
    const sheetData = [columns, ...filteredRows.map((r) => columns.map((c) => r[c]))];

    const ws = XLSX.utils.aoa_to_sheet(sheetData);

    // Auto column width
    const colWidths = columns.map((col) => ({
      wch: Math.max(col.length, 15)
    }));
    ws["!cols"] = colWidths;

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Staff GP");

    XLSX.writeFile(wb, "Staff_Wise_GP.xlsx");
  };

  // --------------------------
  // ⭐ PROFESSIONAL PDF EXPORT
  // --------------------------
  const exportPDF = () => {
    const doc = new jsPDF("landscape");

    doc.setFontSize(18);
    doc.text("Staff Wise GP Report", 14, 20);

    doc.setFontSize(11);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 28);

    autoTable(doc, {
      startY: 35,
      head: [columns],
      body: filteredRows.map((row) => columns.map((c) => row[c])),
      styles: {
        fontSize: 9,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [0, 119, 182], // cyan/blue theme
        textColor: 255,
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240], // soft grey
      },
      margin: { left: 14, right: 14 },
    });

    doc.save("Staff_Wise_GP.pdf");
  };

  return (
    <section id="staff-gp" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Staff wise GP</h2>
        <p className="text-gray-500 mb-6">Live data from Google Sheets</p>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">

          {/* Search */}
          <input
            className="px-4 py-2 w-full sm:w-64 border rounded-md shadow"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={fetchSheet}
              className="px-4 py-2 bg-cyan-600 text-white rounded-md shadow hover:bg-cyan-700"
            >
              Refresh
            </button>

            <button
              onClick={exportExcel}
              className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
            >
              Excel
            </button>

            <button
              onClick={exportPDF}
              className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700"
            >
              PDF
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-auto border">
          {loading ? (
            <div className="p-6 text-center">Loading…</div>
          ) : error ? (
            <div className="p-6 text-center text-red-600">{error}</div>
          ) : (
            <table className="min-w-full text-sm">
              <thead className="bg-gray-200">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="px-4 py-3 text-left font-semibold text-gray-800"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    {columns.map((col) => (
                        <td key={col} className="px-4 py-4 leading-relaxed">
                        {String(row[col] ?? "")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {lastUpdated && (
          <p className="text-xs text-gray-500 mt-2 text-right">
            Last updated: {new Date(lastUpdated).toLocaleTimeString()}
          </p>
        )}
      </div>
    </section>
  );
}
