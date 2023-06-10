// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
// // import axios from "axios";
// import "./CheckoutForm.css";

// const CheckoutForm = ({ price, cart }) => {
//   const stripe = useStripe();
//   const element = useElements();
//   const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure();
//   const [cardError, setCardError] = useState("");
//   const [clientSecret, setClientSecret] = useState("");
//   const [processing, setProcessing] = useState(false);
//   const [transactionId, setTransactionId] = useState("");

//   useEffect(() => {
//     if (price > 0) {
//       axiosSecure.post("/create-payment-intent", { price }).then((res) => {
//         // console.log(res.data.clientSecret)
//         setClientSecret(res.data.clientSecret);
//       });
//     }
//   }, [price, axiosSecure]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !element) {
//       return;
//     }

//     const card = element.getElement(CardElement);
//     if (card === null) {
//       return;
//     }
//     console.log(card);

//     const { error } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });
//     if (error) {
//       console.log("error", error);
//       setCardError(error.message);
//     } else {
//       setCardError("");
//       // console.log('paymentMethod', paymentMethod)
//     }

//     setProcessing(true);

//     const { paymentIntent, error: confirmError } =
//       await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             email: user?.email || "unKnown",
//             name: user?.displayName || "anonymous",
//           },
//         },
//       });
//     if (confirmError) {
//       console.log(confirmError);
//     }

//     console.log("payment intent", paymentIntent);
//     setProcessing(false);

//     if (paymentIntent.status === "succeeded") {
//       setTransactionId(paymentIntent.id);
//       // save payment information to the server
//       const payment = {
//         email: user?.email,
//         transactionId: paymentIntent.id,
//         price,
//         date: new Date(),
//         quantity: cart.length,
//         cartItems: cart.map((item) => item._id),
//         menuItems: cart.map((item) => item.menuItemId),
//         status: "service pending",
//         itemNames: cart.map((item) => item.name),
//       };
//       axiosSecure.post("/payments", payment).then((res) => {
//         console.log(res.data);
//         if (res.data.result.insertedId) {
//           // display confirm
//         }
//       });
//     }
//   };
//   return (
//     <div className="w-2/3 mx-auto">
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button
//           className="m-4 p-1 w-full mt-7 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r"
//           type="submit"
//           disabled={!stripe || !clientSecret || processing}
//         >
//           <span className="block text-black px-28 py-1 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition">
//             Pay
//           </span>
//         </button>
//       </form>
//       {cardError && <p className="text-red-600 text-center">{cardError}</p>}
//       {transactionId && (
//         <p className="text-green-600 text-center">
//           Transaction complete with transactionId {cardError}
//         </p>
//       )}
//     </div>
//   );
// };

// export default CheckoutForm;
