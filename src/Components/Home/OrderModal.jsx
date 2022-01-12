import "../../Styles/OrderModal.css";

function OrderModal() {
  return (
      <div id="order-modal">
        <section className="order-modal__content">
          <button aria-label="Close">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 1L1 17M17 17L1 1L17 17Z"
                stroke="black"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <section id="order-summary">
            <h3>Order Summary</h3>
            <div className="products">
              <section className="order-product">
                <img
                  className="product-image"
                  src="/sneakers.jpeg"
                  alt="Pastel colored sneakers"
                />
                <div className="product-info">
                  <div className="name-size">
                    <p className="product-name">Pastel sneakers</p>
                    <p aria-label="size">23.5 CM</p>
                  </div>
                  <p>1x $350.00 MXN</p>
                </div>
              </section>
              <section className="order-product">
                <img
                  className="product-image"
                  src="/earrings.jpeg"
                  alt="Golden star shaped earrings"
                />
                <div className="product-info">
                  <p className="product-name">Golden star earrings</p>
                  <p>3x $40.00 MXN</p>
                </div>
              </section>
              <section className="order-product">
                <img
                  className="product-image"
                  src="/shirt.jpeg"
                  alt="Woman wearing the skeleton peace black t-shirt"
                />
                <div className="product-info">
                  <div className="name-size">
                    <p className="product-name">Skeleton peace black t-shirt</p>
                    <p aria-label="size">MED</p>
                  </div>
                  <p>1x $80.00 MXN</p>
                </div>
              </section>
            </div>
            <p className="total">
              <span>TOTAL</span>
              <span>$550.00 MXN</span>
            </p>
          </section>
          <section id="checkout">
            <h3>Checkout</h3>
            <p>
              <span>Delivery method: </span>
              <span>STORE PICKUP</span>
            </p>
            <p>
              <span>Payment method: </span>
              <span>CASH</span>
            </p>
            <button>Place Order</button>
          </section>
        </section>
      </div>
  );
}

export default OrderModal;
