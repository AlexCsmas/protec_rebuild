<!-- ./components/Posts.vue -->
<template>
  <section>
  <!-- Blog --> 
   <div class="w-full bg-white">

			<!-- title -->
			<div class="text-center px-6 py-12 mb-6 bg-gray-100 border-b">
				<h1 class=" text-xl md:text-4xl pb-4">Course List</h1>
				
			</div>
			<!-- /title -->

			<div class="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">

				<!-- articles -->

				<div class="w-full md:pr-12 mb-12" >

					<article class="mb-12">

						<div v-for="course in courses" :key="course.id"> 
							<div class="posts">
								<nuxt-link :to="`/course/${course.id}`">
									<h2 class="mt-2 text-black text-xl md:text-2xl no-underline hover:underline">
										{{ course.title }} 
									</h2>
								</nuxt-link>
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
  import courses from '~/safety_management.json'

  export default {
    name: 'courses',
    data () {
      return { courses }
    }
  }
</script>