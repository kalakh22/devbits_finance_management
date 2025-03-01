import { useState } from "react";

const GoalSetting = ({ transactions }) => {
	const [goal] = useState(4000);
	const [currentSavings] = useState(transactions.filter(t => t.type === "savings").reduce((sum, tnx) => sum + tnx.amount, 0));

	return (
		<div className="w-full flex flex-col justify-center items-center self-center">
			<h3 className="mb-6">Financial Goal: ₹{goal}</h3>
			<progress value={currentSavings} max={goal}></progress>
			<p>
				Saved: ₹{currentSavings} / ₹{goal}
			</p>
		</div>
	);
};

export default GoalSetting;
