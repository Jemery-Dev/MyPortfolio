<script>
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import MiniPartie from '../../components/MiniPartie.svelte';
	import experiences from '../../data/experiences.json';
</script>

<div class="mt-24 text-center">
	<MiniPartie text="Expériences"/>
</div>

<div class="flex justify-center items-center my-12">
	<Timeline>
			{#each experiences as experience}
			<TimelineItem title="{experience.title}" date="{experience.date}" timeClass="!text-base">>
				<div class="mx-16">
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-center">
						{experience.paragraph}
					</p>
				</div>
			</TimelineItem>
		{/each}
	</Timeline>
</div>