import React from "react";
import Header from "./sections/Header/Header"
import PhoneDemo from "./sections/phone-demo/PhoneDemo";
import Contact from "./sections/Contact/Contact";
import Contributors from "./sections/Contributors/Contributors";
import MaterialUIExample from './MaterialUiExample'

const App = () => {
	return (
		<div>
			<Header />
			<PhoneDemo />
			<Contact />
			<Contributors />
			<MaterialUIExample/>
		</div>
	);
};

export default App;
