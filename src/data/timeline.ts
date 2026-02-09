// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "",
		title: "",
		description:
			"",
		type: "",
		startDate: "",
		location: "",
		organization: "",
		skills: ["", "", "", "", ""],
		achievements: [
			"",
			"",
			"",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "",
		title: "",
		description:
			"",
		type: "",
		startDate: "",
		endDate: "",
		skills: ["", "", "", ""],
		achievements: [
			"",
			"",
			"",
		],
		links: [
			{
				name: "GitHub Repository",
				url: "https://github.com/example/mizuki-blog",
				type: "project",
			},
			{
				name: "Live Demo",
				url: "https://mizuki-demo.example.com",
				type: "website",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "",
		title: "",
		description:
			"",
		type: "",
		startDate: "",
		endDate: "",
		location: "",
		organization: "",
		position: "",
		skills: ["", "", "", "", ""],
		achievements: [
			"",
			"",
			"",
		],
		icon: "material-symbols:work",
		color: "#DC2626",
		featured: true,
	},
	{
		id: "",
		title: "",
		description:
			"",
		type: "",
		startDate: "",
		endDate: "",
		organization: "",
		skills: ["", "", "", "", ""],
		achievements: [
			"",
			"",
			"",
		],
		links: [
			{
				name: "Course Certificate",
				url: "https://certificates.example.com/web-dev",
				type: "certificate",
			},
		],
		icon: "material-symbols:verified",
		color: "#059669",
	},
	{
		id: "",
		title: "",
		description:
			"",
		type: "",
		startDate: "",
		endDate: "",
		skills: ["", "", "", ""],
		achievements: [
			"",
			"",
			"",
		],
		icon: "material-symbols:database",
		color: "#EA580C",
	},
	{
		id: "",
		title: "",
		description:
			"",
		type: "",
		startDate: "",
		location: "",
		organization: "",
		skills: ["", "", ""],
		achievements: [
			"",
			"",
			"",
		],
		icon: "material-symbols:emoji-events",
		color: "#7C3AED",
	},
	{
		id: "",
		title: "",
		description:
			"",
		type: "",
		startDate: "",
		endDate: "",
		position: "",
		skills: ["", "", ""],
		achievements: [
			"",
			"",
			"",
		],
		icon: "material-symbols:school",
		color: "#059669",
	},
	{
		id: "",
		title: "",
		description:
			"",
		type: "",
		startDate: "",
		endDate: "",
		location: "",
		organization: "",
		achievements: [
			"",
			"",
			"",
		],
		icon: "material-symbols:school",
		color: "#2563EB",
	},
	{
		id: "",
		title: "",
		description:
			"",
		type: "",
		startDate: "",
		skills: [""],
		achievements: [
			'',
			"",
			"",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education")
			.length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
