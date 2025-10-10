import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";

const PayPalButton = ({amount, onSuccess, onError}) => {
	return (
		<PayPalScriptProvider
			options={{
				"client-id":
					"Aak7Xrr0CD2kxZYWVzoKqVHDeOSxDByOefcPrgwEXp3YWfCKqNmz7maYoQLjOrrv0tSQbZ0qSY0q4lDr",
			}}>
			<PayPalButtons
				style={{layout: "vertical"}}
				createOrder={(data, actions) => {
					return actions.order.create({
						purchase_units: [{amount: {value: amount}}],
					});
				}}
				onApprove={(data, actions) => {
					return actions.order.capture().then(onSuccess);
				}}
				onError={onError}
			/>
		</PayPalScriptProvider>
	);
};

export default PayPalButton;
