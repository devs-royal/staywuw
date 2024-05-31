import React from "react";
import Image from "next/image";
import { Offcanvas } from "react-bootstrap";

import CartGet from "./CartGet";
import { useCartAxios } from "./CartAxios";

import IconLeft from "../../assets/icons/utils/navigation/left.svg";

export default function CartCanvasM(props) {
  const { totalItemsInCart, fetchData } = useCartAxios();
  const { showOffcanvas, setShowOffcanvas, cartUid } = props;

  const handleClose = () => {
    setShowOffcanvas(false);
    if (cartUid) {
      fetchData(cartUid);
    }
  };

  return (
    <>
      <Offcanvas show={showOffcanvas} placement="end">
        <Offcanvas.Header>
          <div className="m-display-mobile-cart">
            <div className="m-btn-close-cart">
              <button
                className="border border-0 bg-transparent p-0"
                onClick={handleClose}
              >
                <Image src={IconLeft} alt="icon left" />
              </button>
            </div>
            <div className="m-your-cart">
              Tu carrito:{" "}
              {totalItemsInCart ? (
                <span className="color-cart-m">({totalItemsInCart})</span>
              ) : (
                <span>(0)</span>
              )}
            </div>
          </div>
        </Offcanvas.Header>

        <div className="m-line-offCanvas" />

        <Offcanvas.Body className="d-flex flex-column gap-4">
          <CartGet onCloseMenu={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
