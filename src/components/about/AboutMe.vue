<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Hi, I am Nguyen Hoai Trong',
				},
				{
					id: 2,
					bio:
						'I am a graduate from the University of Science, VNU-HCM. I’m currently learning Verilog, SystemVerilog and RTL/ASIC/Physical/AMS Design. And also currently learning hardware, firmware, PCB design, and IoT.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
