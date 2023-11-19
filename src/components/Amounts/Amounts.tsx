const getAmounts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/water", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch amounts");
    }
    return res.json();
  } catch (err) {
    console.log("Error fetching amounts", err);
  }
};

const Amounts = async () => {
  const { waters } = await getAmounts();

  const headings = ["Date", "Cat", "Amount (g)"];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-4/6 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headings.map((heading) => (
              <th scope="col" className="py-3">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {waters.map((water: any) => (
            <tr>
              <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 py-3">
                {water.date}
              </td>
              <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 py-3">
                {water.info.name}
              </td>
              <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 py-3">
                {water.info.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Amounts;
