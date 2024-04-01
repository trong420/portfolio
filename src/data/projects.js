// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'CPU With Structural Modeling',
		category: 'VLSI',
		img: require('@/assets/images/1.jpg'),
	},
	{
		id: 2,
		title: 'IC Compiler Workshop',
		category: 'VLSI',
		img: require('@/assets/images/2.jpg'),
	},
	{
		id: 3,
		title: 'STM32 Development Board',
		category: 'PCB Design',
		img: require('@/assets/images/3.jpg'),
	},
	{
		id: 4,
		title: 'APDS-9960',
		category: 'PCB Design',
		img: require('@/assets/images/4.jpg'),
	},
	{
		id: 5,
		title: 'Face Recognition',
		category: 'Software',
		img: require('@/assets/images/5.jpg'),
	},
	{
		id: 6,
		title: 'Two Stage Opamp',
		category: 'VLSI',
		img: require('@/assets/images/6.jpg'),
	},
	{
		id: 7,
		title: 'Banking App',
		category: 'Software',
		img: require('@/assets/images/7.jpg'),
	},
	{
		id: 8,
		title: 'Phase Locked Loop',
		category: 'VLSI',
		img: require('@/assets/images/8.jpg'),
	},
	{
		id: 9,
		title: 'NIOS II',
		category: 'Hardware',
		img: require('@/assets/images/9.jpg'),
	},
	{
		id: 10,
		title: 'Full Adder',
		category: 'VLSI',
		img: require('@/assets/images/10.jpg'),
	},
	{
		id: 11,
		title: 'HEVC-H.265',
		category: 'Hardware',
		img: require('@/assets/images/11.jpg'),
	},
	{
		id: 12,
		title: 'PIC24',
		category: 'Hardware',
		img: require('@/assets/images/12.jpg'),
	},
];

export default projects;
