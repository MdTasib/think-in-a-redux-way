const initialState = {
	blogPost: [
		{
			id: 1,
			title: "Boost your conversion rate",
			type: "Article",
			author: "Steven Smith",
			date: "11 Jul, 2022",
			time: "6 min read",
			blogImg:
				"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
			authorImg:
				"https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 2,
			title: "How to use search engine optimization to drive sales",
			type: "SEO",
			author: "Michel Johnson",
			date: "08 Feb, 2022",
			time: "11 min read",
			blogImg:
				"https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
			authorImg:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		},
		{
			id: 3,
			title: "Improve your customer experience",
			type: "Article",
			author: "Steven Smith",
			date: "11 March, 2022",
			time: "22 min read",
			blogImg:
				"https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
			authorImg:
				"https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 4,
			title: "How to maintain your daily routing",
			type: "Time",
			author: "Bin Mitchel",
			date: "19 Sep, 2022",
			time: "25 min read",
			blogImg:
				"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			authorImg:
				"https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 5,
			title: "Road map of becoming a web-developer",
			type: "Skill",
			author: "Sumit",
			date: "19 May, 2022",
			time: "44 min read",
			blogImg:
				"https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			authorImg: "https://avatars.githubusercontent.com/u/73503432?v=4",
		},
		{
			id: 6,
			title: "Improve your presentation skills",
			type: "Skill",
			author: "Michel Johnson",
			date: "19 Feb, 2022",
			time: "20 min read",
			blogImg:
				"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBwcmVzZW50YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
			authorImg:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		},
		{
			id: 7,
			title: "What is Redux",
			type: "Knowledge",
			author: "Sumit",
			date: "27 Feb, 2022",
			time: "40 min read",
			blogImg:
				"https://cdn.educba.com/academy/wp-content/uploads/2019/05/What-is-Redux.jpg",
			authorImg: "https://avatars.githubusercontent.com/u/73503432?v=4",
		},
		{
			id: 8,
			title: "What is React",
			type: "Skill",
			author: "Sumit",
			date: "11 Feb, 2022",
			time: "25 min read",
			blogImg:
				"https://cdn.educba.com/academy/wp-content/uploads/2019/06/What-is-React.jpg",
			authorImg: "https://avatars.githubusercontent.com/u/73503432?v=4",
		},
		{
			id: 9,
			title: "Javascript Closoure Explanetion",
			type: "Knowledge",
			author: "Michel Johnson",
			date: "15 Feb, 2022",
			time: "29 min read",
			blogImg:
				"https://dmitripavlutin.com/static/2fa305f49ea424ca5eae513eac5329d9/59014/cover-2.png",
			authorImg:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		},
	],
};

export default initialState;
