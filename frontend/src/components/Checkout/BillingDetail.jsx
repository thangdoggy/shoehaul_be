import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../actions/orderActions";
import Swal from "sweetalert2";
import { getUserDetails } from "../../actions/userActions";
const styles = {
  input: {
    width: "730px",
  },
  textarea: {
    width: "730px",
    minHeight: "205px",
    maxHeight: "205px",
  },
  default_details: {
    width: "225px",
    //backgroundColor: '#fbeaab'
  },
  hover_button: {
    //backgroundColor: '#fbeaab',
  },
};
export default function BillingDetail() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  const orderItems = user.cartItems;
  useEffect(() => {
    dispatch(getUserDetails("profile"));
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    document.getElementById("name").value = user.name;
    document.getElementById("phone").value = user.phone;
    document.getElementById("address").value = user.address;
  };
  const [selectedPayment, setSelectedPayment] = React.useState("COD");
  const payment = [
    {
      id: 1,
      name: "COD",
    },
    {
      id: 2,
      name: "MasterCard/Visa",
    },
  ];
  const handleChange = (e) => {
    setSelectedPayment(e.target.value);
  };
  const handleOrder = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const shippingAddress = document.getElementById("address").value;
    const note = document.getElementById("note").value;
    const payoption = document.getElementsByName("payment");
    var paymentMethod = "";
    for (let i = 0; i < payoption.length; i++) {
      if (payoption[i].checked) {
        paymentMethod = payoption[i].value;
      }
    }
    if (name === "" || phone === "" || shippingAddress === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all the fields!",
      });
    } else {
      const totalPrice = userInfo.cartItems.reduce((accumulator, object) => {
        return accumulator + object.price;
      }, 0);
      Swal.fire("Good job!", "You made purchase successfully!", "success");
        dispatch(
          createOrder(orderItems, shippingAddress, paymentMethod, totalPrice, note, user._id)
        );
        
    }
  };
  const active =
    "pl-10 shadow-lg p-2.5 w-96 mb-5 rounded-3xl text-left bg-amber-200 transition cursor-pointer";
  const normal =
    "pl-10 shadow-lg p-2.5 w-96 mb-5 rounded-3xl text-left bg-white transition cursor-pointer";
  return (
    <>
      <form className="col-span-3" onSubmit={handleOrder}>
        <h1 className="text-3xl  mt-5 mb-10 font-bold">Billing Details</h1>
        <div className="col-span-2">
          <label htmlFor="name" />
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="pl-10 border border-black p-2.5 w-96 mb-5 rounded-3xl focus:outline-none"
            style={styles.input}
            required
          />
          <label htmlFor="phone" />
          <input
            id="phone"
            type="text"
            placeholder="Phone number"
            className="pl-10 border border-black p-2.5 w-96 mb-5 rounded-3xl focus:outline-none"
            style={styles.input}
            required
          />
          <label htmlFor="address" />
          <input
            id="address"
            type="text"
            placeholder="Address"
            className="pl-10 border border-black p-2.5 w-96 mb-5 rounded-3xl focus:outline-none"
            style={styles.input}
            required
          />
          <textarea
            id="note"
            type="text"
            placeholder="Note"
            className="pl-10 block border border-black p-2.5 w-96 mb-5 rounded-3xl focus:outline-none  "
            style={styles.textarea}
          />
          <button
            className="mt-5 font-bold text-base object-fill rounded-3xl p-2.5 hover:bg-black hover:text-white shadow-lg transition ease-in"
            onClick={(e) => handleClick(e)}
            style={styles.default_details}
          >
            Use default detail
          </button>
        </div>
        <h2 className="mt-10 text-2xl mb-10 font-bold">Delivery Method</h2>

        <button
          style={styles.input}
          className="pl-10 shadow-lg p-2.5 w-96 mb-5 rounded-3xl bg-amber-200 transition"
          type="button"
          disabled
        >
          <span className="float-left">GHN</span>{" "}
          <span className="float-right mr-5">FREE</span>
        </button>
        <h2 className="mt-10 text-2xl mb-10 font-bold">Payment Method</h2>
        <ul>
          {payment.map((payment) => (
            <div
              className={selectedPayment === payment.name ? active : normal}
              style={styles.input}
            >
              <li>
                <label>
                  <input
                    type="radio"
                    id={payment.name}
                    name="payment"
                    value={payment.name}
                    checked={selectedPayment === payment.name}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span
                    style={styles.input}
                    className="cursor-pointer"
                    type="button"
                  >
                    {payment.name}
                  </span>
                </label>
              </li>
            </div>
          ))}
        </ul>
        <button
          type="submit"
          className="block mt-5 font-bold text-base object-fill rounded-3xl p-2.5 mb-10 hover:bg-black hover:text-white shadow-lg transition ease-in"
          style={styles.default_details}
          
        >
          MAKE PURCHASE NOW
        </button>
      </form>
    </>
  );
}
