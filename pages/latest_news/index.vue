<template>


    <section>
       <div class="w-full bg-white">

			<!-- title -->
			<div class="text-center px-6 py-12 mb-6 bg-gray-100 border-b">
				<h1 class=" text-xl md:text-4xl pb-4">Latest News</h1>
				<p class="leading-loose text-gray-dark">
					Catch up on the latest news and updates.
				</p>
			</div>
			<!-- /title -->

			<div class="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">

				<!-- articles -->

                

				<div class="w-full md:pr-12 mb-12">
                   
					<article class="mb-12">



						<div>
							<div class="posts">
								<nuxt-link to="/latest_news/post/blog-post-1">
									<h2 class="mt-2 text-black text-xl md:text-2xl no-underline hover:underline">
										Importance of Health and Safety training
									</h2>
								</nuxt-link>
								
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia omnis illum hic debitis repudiandae! Quas odio tenetur temporibus mollitia nesciunt quia aliquid veniam doloribus tempora necessitatibus maiores harum, corporis soluta?
								</p>

							</div>
							
							<div class="mb-4 text-sm text-gray-700">
								by <a href="#" class="text-gray-700">Joe Bloggs</a> on 19th March 2019
								<span class="font-bold mx-1"> | </span>
								<a href="#" class="text-gray-700">Uncategorised</a>
								<span class="font-bold mx-1"> | </span>
								<a href="#" class="text-gray-700">2 Comments</a>
							</div>
						</div>


						<!-- ||||||||||||||||| Our POST COMPONENT |||||||||||||||||| --> 

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
						<h3 class="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">Categories</h3>

						<div class="p-4">
							<ul class="list-reset leading-normal">
								<li><a href="#" class="text-gray-darkest text-sm">Uncategorised</a></li>
								
							</ul>
						</div>
					</aside>
					
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