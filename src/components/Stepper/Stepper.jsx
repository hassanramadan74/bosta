import i18next, { t } from "i18next";

function Stepper({ product }) {
  const fontClass = i18next.language === "ar" ? "font-cairo" : "font-primary";
  const currentLang = i18next.language === "ar" ? true : false;
  const direction = i18next.language === "ar" ? "rtl" : "ltr";
  const flipIconClass = i18next.language === "ar" ? "transform scale-x-[-1]" : "";

  

  if (product) {
    console.log("here is the product");
  } else {
    console.log("there is no product");
  }
  return (
    <>
      <div className={`${fontClass} p-5 flex items-center justify-center`} dir={direction}> 
        <ol className="flex items-center w-full justify-center">
          <li
            className={`flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block ${
              product?.CurrentStatus?.state === "DELIVERED"
                ? "dark:after:border-green-500 font-bold"
                : product?.CurrentStatus?.state === "CANCELLED"
                ? "dark:after:border-red-500"
                : product?.CurrentStatus?.state === "DELIVERED_TO_SENDER"
                ? "dark:after:border-orange-500"
                : "dark:after:border-gray-500"
            }`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full lg:h-7 lg:w-7 shrink-0 ${
                product?.CurrentStatus?.state === "DELIVERED"
                  ? "bg-green-500 font-bold"
                  : product?.CurrentStatus?.state === "CANCELLED"
                  ? "bg-red-500"
                  : product?.CurrentStatus?.state === "DELIVERED_TO_SENDER"
                  ? "bg-orange-500"
                  : "bg-gray-500"
              }`}
            >
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li
            className={`flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block ${
              product?.CurrentStatus?.state === "DELIVERED"
                ? "dark:after:border-green-500 font-bold"
                : product?.CurrentStatus?.state === "CANCELLED"
                ? "dark:after:border-red-500"
                : product?.CurrentStatus?.state === "DELIVERED_TO_SENDER"
                ? "dark:after:border-orange-500"
                : "dark:after:border-gray-500"
            }`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full lg:h-7 lg:w-7 shrink-0 ${
                product?.CurrentStatus?.state === "DELIVERED"
                  ? "bg-green-500 font-bold"
                  : product?.CurrentStatus?.state === "CANCELLED"
                  ? "bg-red-500"
                  : product?.CurrentStatus?.state === "DELIVERED_TO_SENDER"
                  ? "bg-orange-500"
                  : "bg-gray-500"
              }`}
            >
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li
            className={`flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block ${
              product?.CurrentStatus?.state === "DELIVERED"
                ? "dark:after:border-green-500 font-bold"
                : "dark:after:border-gray-500"
            }`}
          >
            {" "}
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full lg:h-12 lg:w-12 shrink-0 ${
                product?.CurrentStatus?.state === "DELIVERED"
                  ? "bg-green-500 font-bold lg:h-7 lg:w-7"
                  : product?.CurrentStatus?.state === "CANCELLED"
                  ? "bg-red-500"
                  : product?.CurrentStatus?.state === "DELIVERED_TO_SENDER"
                  ? "bg-orange-500"
                  : "bg-gray-500"
              }`}
            >
              {product?.CurrentStatus?.state === "DELIVERED" ? (
                <i className="fa-solid fa-check"></i>
              ) : (

               <i className={`fa-solid fa-truck md:text-base text-sm transform ${flipIconClass}`} />

              )}
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full lg:h-12 lg:w-12 shrink-0 ${
                product?.CurrentStatus?.state === "DELIVERED"
                  ? "bg-green-500 font-bold lg:h-7 lg:w-7"
                  : "bg-gray-500"
              }`}
            >
              {product?.CurrentStatus?.state === "DELIVERED" ? (
                <i className="fa-solid fa-check text-white"></i>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              )}
            </span>
          </li>
        </ol>
      </div>
      <div className={`${fontClass} grid grid-cols-4 px-5 pb-5`}>
        <div>
          <h1 className="text-[#2b2f3a] font-bold text-[16px]">
            {t("TICKET CREATED")}
          </h1>
        </div>
        <div className="ps-5">
          <h1 className="text-[#2b2f3a] font-bold text-[16px]">
            {t("PACKAGE RECEIVED")}
          </h1>
        </div>
        <div className={`${currentLang?"text-center": "text-right"}`}>
          <h1 className="text-[#2b2f3a] font-bold text-[16px]">
            {t("OUT FOR DELIVERY")}
          </h1>
        </div>
        <div className={`${currentLang?"text-left": "text-right"}`}>
          <h1 className="text-[#2b2f3a] font-bold text-[16px]">
            {t("DELIVERED")}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Stepper;
