import React from "react";

const Leaderboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600">Leaderboard</h1>
      <p className="mt-4 text-gray-700">
        Check out the top performers and their achievements.
      </p>
      <table className="table-auto w-full mt-8 bg-white shadow rounded">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">1500</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">1400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;