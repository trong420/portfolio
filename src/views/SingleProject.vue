<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'CPU With Structural Modeling',
				singleProjectDate: 'Dec 2023',
				singleProjectTag: 'VLSI',
			},
			projectImages: [
				{
					id: 1,
					title: 'CPU With Structural Modeling',
					img: require('@/assets/images/1.jpg'),
				},
				{
					id: 2,
					title: 'CPU With Structural Modeling',
					img: require('@/assets/images/13.jpg'),
				},

			],
			projectInfo: {
				clientHeading: 'About',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'CPU With Structural Modeling',
					},
					{
						id: 2,
						title: 'Services',
						details: 'VLSI',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://github.com/trong420/CPU-structural',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Developed a CPU with Structural Modeling in Verilog',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Verilog',
							'Design Vision',
							'EDA Playground',
						],
					},
				],
				projectDetailsHeading: 'Description',
				projectDetails: [
					{
						id: 1,
						details:
							'Developed a CPU with Structural Modeling in Verilog to understand structure of CPUs from logic gates.',
					},
					{
						id: 2,
						details:
							'The CPU includes a counter, multiplexer, register, ALU, and control unit, simulating them on EDA Playground.'
					},
					{
						id: 3,
						details:
							'Do a lab to get familiar with the tool Synopsys Design Compiler NXT.'
					},
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					
					{
						id: 1,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/',
					},
					{
						id: 3,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://youtube.com/',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'VLSI',
						img: require('@/assets/images/2.jpg'),
					},
					{
						id: 2,
						title: 'VLSI',
						img: require('@/assets/images/6.jpg'),
					},
					{
						id: 3,
						title: 'VLSI',
						img: require('@/assets/images/8.jpg'),
					},
					{
						id: 4,
						title: 'VLSI',
						img: require('@/assets/images/10.jpg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
