import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
	{ month: "Jan", income: 5000, expenses: 3000 },
	{ month: "Feb", income: 6000, expenses: 3500 },
	{ month: "Mar", income: 5500, expenses: 4000 },
];

const FinanceChart = () => {
	return (
		<div className="w-full">
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={data}>
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="income" fill="#4CAF50" />
					<Bar dataKey="expenses" fill="#F44336" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default FinanceChart;
