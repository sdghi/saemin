<template>
	<div id="ramen" :class="moodClass">
		<RamenSvg
			:brothAndNoodle="brothAndNoodleRef"
			:topping="toppingRef"
			:bowl="bowlRef"
			:moodClass="moodClass"
			v-if="toppingRef !== 2"
		/>
		<CupNoodle v-if="toppingRef === 2" />
	</div>
</template>

<script>
	import RamenSvg from "./RamenSvg";
	import CupNoodle from "./CupNoodle";

	export default {
		name: "Ramen",
		props: ["brothAndNoodleRef", "toppingRef", "bowlRef", "moodClass"],
		components: {
			RamenSvg,
			CupNoodle
		}
	};
</script>

<style lang="scss" scoped>
	@import "../scss/moods/angry";
	@import "../scss/moods/anxious";
	@import "../scss/moods/disenchanted";
	@import "../scss/moods/easygoing";
	@import "../scss/moods/optimistic";
	@import "../scss/moods/troubled";

	#ramen {
		height: fit-content;
		width: 100%;
		position: relative;
		z-index: 9999;

		svg {
			height: 100%;
			width: 100%;
		}
	}

	@media (min-width: $breakpoint-medium) {
		#ramen {
			height: 100vh;

			svg {
				position: absolute;
				bottom: 0;
				left: 0;
				height: auto;
			}
		}
	}
</style>
