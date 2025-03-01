import React from "react";
import "./index.css"; // Ensure TailwindCSS styles are applied
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<div className="min-h-screen bg-gray-100 flex justify-center items-center">
			<Dashboard />
		</div>
	);
}

export default App;
