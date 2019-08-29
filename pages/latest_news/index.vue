<template>


    <section>
       <div class="w-full bg-white">

		    <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-5xl leading-none py-4">Latest News.</h1>
				<p class="leading-loose text-gray-dark">
					Catch up on the latest news and updates.
				</p>
			</div>
			<!-- /title -->

			<div class="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">

				<!-- articles -->

				<div class="w-full md:pr-12 mb-12">
                   
					<article class="mb-12">

						<posts />

					</article>

					<!-- <div class="flex justify-between text-xs">
						<a href="#" class="bg-gray text-white no-underline py-2 px-3 rounded">Previous</a>
						<a href="#" class="bg-black text-white no-underline py-2 px-3 rounded">Next</a>
					</div> -->

				</div>
				<!--/ articles -->

				

			</div>

		</div>
    </section>
</template>

<script>
import Posts from '~/components/Posts.vue'

export default {
  components: {
    Posts
  },
  // ...
}
</script>