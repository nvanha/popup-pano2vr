import ModalCheckout from "components/ModalCheckout";
import ModalDetails from "components/ModalDetails";
import React, { useState } from "react";

const Home = () => {
  const [isShowModalDetails, setIsShowModalDetails] = useState(true);
  const [isShowModalCheckout, setIsShowModalCheckout] = useState(false);

  const handleShowModalCheckout = () => {
    setIsShowModalDetails(false);
    setIsShowModalCheckout(true);
  };

  const handleBack = () => {
    setIsShowModalCheckout(false);
    setIsShowModalDetails(true);
  };

  return (
    <>
      {isShowModalDetails && (
        <ModalDetails
          show={isShowModalDetails}
          handleShowModalCheckout={handleShowModalCheckout}
        />
      )}

      {isShowModalCheckout && (
        <ModalCheckout show={isShowModalCheckout} handleBack={handleBack} />
      )}
    </>
  );
};

export default Home;
