<!-- ./components/Posts.vue -->
<template>
  <section>
  <!-- Blog --> 
   <div class="w-full bg-white">


			<div class="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">

				<!-- articles -->

				<div class="w-full md:pr-12 mb-12" >

					<article class="mb-12">
						<div v-for="post in posts" :key="post.id"> 
							<div class="posts">
								<nuxt-link :to="`/post/${post.id}`">
									<h2 class="mt-2 text-black text-xl md:text-2xl no-underline hover:underline">
										{{ post.title }} 
									</h2>
								</nuxt-link>
								
								<p>
									{{ post.summary }} 
								</p>

							</div>
							
							<div class="mb-4 text-sm text-gray-700">
								by <a href="#" class="text-gray-700">{{ post.author}}</a> on 19th March 2019
								<span class="font-bold mx-1"> | </span>
								<a href="#" class="text-gray-700"> \\ {{ post.published }}</a>
								
								
							</div>
						</div>

					</article>


				</div>
				<!--/ articles -->

				
			</div>

		</div>


</section>



</template>

<script>
  import posts from '~/posts.json'

  export default {
    name: 'posts',
    data () {
      return { posts }
    }
  }
</script>