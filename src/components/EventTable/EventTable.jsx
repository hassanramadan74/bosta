import { useState } from "react";
import problems from "../../assets/problem.png";
import i18next, { t } from "i18next";

const EventTable = ({ product }) => {

  const data = product.TransitEvents.map((event) => {

    const locale = i18next.language === "ar" ? "ar-EG" : "en-US";

    const formattedTime = new Date(event.timestamp)
      .toLocaleTimeString(locale, {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .toLowerCase();

    const formattedDate = new Date(event.timestamp)
      .toLocaleDateString(locale);

    const formattedId = new Intl.DateTimeFormat(locale).format(event.id);

    return {
      date: formattedDate,
      time: formattedTime,
      state: event.state
        .replace(/_/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      location: "Madint Nasr", // This can also be translated if needed
      id: formattedId,
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get current rows for the page
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 py-4">
        <div className="my-4">
          <h1 className="text-[#2b2f3a] font-bold text-[16px]">
            {t("Promised Address")}
          </h1>
        </div>
        <div className="bg-[#FAFAFA] p-5 rounded-md">
          <p className="text-[#2b2f3a] text-[14px] font-semibold">
            {t("Address")}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-5 border border-gray-200 rounded-md p-4">
          <div className="col-span-2">
            <h1 className="text-[#2b2f3a] font-bold text-center">
              {t("Problem")}
            </h1>
            <button className="py-2 font-bold w-full mt-4 rounded-md text-white bg-[#E30613] text-center">
              {t("problems")}
            </button>
          </div>
          <div className="flex justify-center items-center col-span-1">
            <img src={problems} alt="problem" className="w-20 h-20 mx-auto" />
          </div>
        </div>
      </div>
      <div className="col-span-2 py-4">
        <div className="my-4">
          <h1 className="text-[#2b2f3a] font-bold text-[16px]">
            {t("Package Details")}
          </h1>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-900">
            <thead className="text-xs text-white uppercase bg-[#E30613]">
              <tr>
                <th scope="col" className="px-6 py-5">
                  {t("Date")}
                </th>
                <th scope="col" className="px-6 py-5">
                  {t("Time")}
                </th>
                <th scope="col" className="px-6 py-5">
                  {t("State")}
                </th>
                <th scope="col" className="px-6 py-5">
                  {t("Location")}
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.time}</td>
                  <td className="px-6 py-4">{t(item.state)}</td>
                  <td className="px-6 py-4">{t(item.location)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 px-2"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-900 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              {t("Showing")}{" "}
              <span className="font-semibold text-gray-900">
                {1 + (currentPage - 1) * rowsPerPage}-
                {Math.min(currentPage * rowsPerPage, data.length)}
              </span>{" "}
              {t("of")}{" "}
              <span className="font-semibold text-gray-900">
                {data.length}
              </span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    currentPage === 1
                      ? "text-gray-300"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  } bg-white border border-gray-300 rounded-s-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`}
                >
                  {t("Previous")}
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => handlePageChange(i + 1)}
                    className={`flex items-center justify-center px-3 h-8 ${
                      currentPage === i + 1
                        ? "text-white border border-gray-300 bg-blue-50"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    } dark:border-gray-700 dark:bg-gray-700`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    currentPage === totalPages
                      ? "text-gray-300"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  } bg-white border border-gray-300 rounded-e-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`}
                >
                  {t("Next")}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default EventTable;