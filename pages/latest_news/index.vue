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


					<div class="flex justify-between text-xs">
						<a href="#" class="bg-gray text-white no-underline py-2 px-3 rounded">Previous</a>
						<a href="#" class="bg-black text-white no-underline py-2 px-3 rounded">Next</a>
					</div>
				</div>
				<!--/ articles -->

				<!-- sidebar -->
				<div class="w-full md:w-64">
					
					<aside class="rounded shadow overflow-hidden mb-6">
						<h3 class="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">Latest Posts</h3>

						<div class="p-4">
							<ul class="list-reset leading-normal">
								<li><a href="#" class="text-gray-darkest text-sm">Importance of Health and Safety training</a></li>
							
							</ul>z
						</div>
					</aside>

				</div>
				<!-- /sidebar -->

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