Vue.component('courses', {
	template: `
		<div class="row justify-content-center">
			<div class="pb-5">
				<h2 class="text-center">Completed Courses</h2>
				<hr>
				<ul>
					<course v-for="course in completedCourses" :key="course.id">{{course.name}}</course>
				</ul>
			</div>	
		</div>	
	`,

	data() {
		return {
			courses: [
				{id:1, name: "Computer Science I - Python",  				completed: true },
				{id:2, name: "Computer Science II - C++"  ,  				completed: true },
				{id:3, name: "Discrete Structures"	, 		  				completed: true },
				{id:4, name: "Algorithms & Data Structures", 				completed: true },
				{id:5, name: "Assembly & Computer Organization", 			completed: true },
				{id:6, name: "Intro to Computer Systems", 					completed: true },
				{id:7, name: "Theory of Programming Languages", 			completed: true },
				{id:8, name: "Database Management Systems"	, 				completed: true },
				{id:9, name: "Compiler Design & Software Development", 		completed: true },
				{id:10, name: "Ethics in Computing & Technology"	, 		completed: true },
				{id:11, name: "Computer Languages: Java", 					completed: true },
				{id:12, name: "Web Technologies",  							completed: true },
				{id:13, name: "Software Engineering"  ,  					completed: true }
			]
		}
	},

	computed: {
		completedCourses() {
			return this.courses.filter(course => course.completed);
		},

	}
});

Vue.component('course', {
	template: `
		<li><slot></slot></li>
	`
});

let courses_vm = new Vue({
	el: '#courseContent'
});
