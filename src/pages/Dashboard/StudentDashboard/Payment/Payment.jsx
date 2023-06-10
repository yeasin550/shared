// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import useCart from "../../../hooks/useCart";

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const Payment = () => {
//   const [cart] = useCart();
//   const total = cart.reduce((sum, item) => sum + item.price, 0);
//   const price = parseFloat(total.toFixed(2));

//   return (
//     <div>
     

//       <Elements stripe={stripePromise}>
//         <CheckoutForm price={price} cart={cart}></CheckoutForm>
//       </Elements>
//     </div>
//   );
// };

// export default Payment;


const Payment = () => {
    return (
        <div>
            Specific Payment method
        </div>
    );
};

export default Payment;
