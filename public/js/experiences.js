let expriences_vm = new Vue({
	el: '#portfolioContent .container',
	data: {
		experiences: [
			{
				id: 1,
				employer: "Middle Tennessee State University",
				date: "Sep 2019 - Apr 2020",
				title: "Computer Science Tutor",
				description: "As a Computer Science Tutor, I assisted students to develop their programming skills and understand the concepts of data structure and algorithms. Either Python or C++ is the main language." 
			},
			{
				id: 2,
				employer: "United States Army National Guard",
				date: "Dec 2017 - Dec 2018",
				title: "Automated Logistics Team Leader",
				description: "After getting discharged from Army Active Duty, I joined the National Guard to fulfill the rest of 8 years fulfillment in Tennessee. I conducted monthly inspection on military vehicles and analyzed the warehouse transactions by using Systems, Application and Producs (SAP) program." 
			},
			{
				id: 3,
				employer: "United States Army",
				date: "Aug 2014 - Nov 2017",
				title: "Automated Logistics Team Leader",
				description: "I was stationed in South Korea for a year as a team leader. My role was to turn in used repair parts, which the customers brought to my department, to the designated place. Then, I moved to Texas for two years as the team leader. I lead 10 material handling clerks to specifically work on the maintenance of the new repair parts such as vehicle parts and weapon parts." 
			},
			{
				id: 4,
				employer: "United States Army",
				date: "Apr 2011 - Jul 2014",
				title: "Material Handling Clerk",
				description: "My first job was a Material Handling Clerk in Kentucky. I played a vital role to keep the accuracy of 95% on maintaining the parts. Also, I turned in an enormous excess parts to the designated place. While deploying to Afghanistan for 9 months, I conducted a sling load operation to transport army supplies to smaller stations." 
			}

		]
	}
});
