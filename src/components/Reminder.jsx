import { useEffect } from "react";

const BillReminder = ({ message, setMessage, duration = 5000 }) => {
	useEffect(() => {
		const timer = setTimeout(() => setMessage(""), duration);
		return () => clearTimeout(timer);
	}, [duration, setMessage]);

	if (message.length === 0) return;

	return (
		<div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300">
			<p className="text-sm sm:text-base">{message}</p>
			<div className="h-1 bg-white mt-2" style={{ animation: `shrink ${duration}ms linear forwards` }} />
			<style>
				{`
                @keyframes shrink {
                    from { width: 100%; }
                    to { width: 0%; }
                }
                `}
			</style>
		</div>
	);
};

export default BillReminder;
