import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import translation hook
import Stepper from "../Stepper/Stepper.jsx";
import EventTable from "../EventTable/EventTable.jsx";

const SingleProduct = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation(); // Translation hook
  const [Product, setProduct] = useState(null);
  const [CurrentDate, setCurrentDate] = useState(null);
  const [PromisedDate, setPromisedDate] = useState(null);
  const fontClass = i18n.language === "ar" ? "font-cairo" : "font-primary";

  // Function to fetch the specific product data
  async function getSpecificProduct(id) {
    let { data } = await axios.get(
      `https://tracking.bosta.co/shipments/track/${id}`
    );
    setProduct(data);
  }

  // Format timestamp with locale
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "long",
    };
    return new Intl.DateTimeFormat(i18n.language, options).format(date);
  }

  // Format delivery date with locale
  function formatDelivery(timestamp) {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Intl.DateTimeFormat(i18n.language, options).format(date);
  }

  useEffect(() => {
    getSpecificProduct(id);
  }, [id]);

  useEffect(() => {
    if (Product) {
      setCurrentDate(formatTimestamp(Product.CurrentStatus.timestamp));
      setPromisedDate(formatDelivery(Product.PromisedDate));
    }
  }, [Product, i18n.language]);

  return (
    <section className={`${fontClass} container text-[16px] py-14 md:py-24`}>
      <div className="border border-gray-300 rounded-lg">
        {/* Details */}
        <div className="border-b border-gray-200 grid grid-cols-2 md:grid-cols-4 p-5 gap-4">
          {/* Shipment Number */}
          <div className="flex flex-col space-y-2 text-[#676e6d]">
            <h2 className="font-primary text-[16px] ">
              {t("Shipment Number")} {Product?.TrackingNumber}
            </h2>
            <h1
              className={`${
                Product?.CurrentStatus?.state === "DELIVERED"
                  ? "text-green-500 font-bold"
                  : Product?.CurrentStatus?.state === "CANCELLED"
                  ? "text-red-500"
                  : Product?.CurrentStatus?.state === "DELIVERED_TO_SENDER"
                  ? "text-orange-500"
                  : "text-gray-500"
              } `}
            >
              {t(Product?.CurrentStatus?.state)} {/* Translate state */}
            </h1>
          </div>

          {/* Last Update */}
          <div className="flex flex-col space-y-2 text-[#676e6d]">
            <h2 className="font-primary text-[16px] ">{t("Last Update")}</h2>
            <h1 className="text-[#2b2f3a] font-bold text-[16px]">
              {CurrentDate}
            </h1>
          </div>

          {/* Provider Name */}
          <div className="flex flex-col space-y-2 text-[#676e6d]">
            <h2 className="font-primary text-[16px] ">{t("Provider Name")}</h2>
            <h1 className="text-[#2b2f3a] font-bold text-[16px]">
              {Product?.provider}
            </h1>
          </div>

          {/* Delivery Time */}
          <div className="flex flex-col space-y-2 text-[#676e6d]">
            <h2 className="font-primary text-[16px] ">{t("Delivery Time")}</h2>
            <h1 className="text-[#2b2f3a] font-bold text-[16px]">
              {PromisedDate}
            </h1>
          </div>
        </div>

        {Product && <Stepper product={Product} />}
      </div>
      {Product && <EventTable product={Product} />}
    </section>
  );
};

export default SingleProduct;
