import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const groupByMonth = (data) => {
	return data.reduce((acc, { date, amount, type }) => {
		const month = date.slice(0, 7); // Extract YYYY-MM

		if (!acc[month]) acc[month] = { month, income: 0, savings: 0, expense: 0 };

		acc[month][type] += amount;
		return acc;
	}, {});
};

const FinanceChart = ({ transactions }) => {
	return (
		<div className="w-full">
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={Object.values(groupByMonth(transactions))}>
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="income" fill="green" />
					<Bar dataKey="expense" fill="red" />
					<Bar dataKey="savings" fill="purple" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default FinanceChart;
