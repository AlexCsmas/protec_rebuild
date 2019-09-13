<template>
    <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-5xl leading-none py-4">Services.</h1>
			</div>
			<!-- /title -->

        </div>

        <div class=" flex flex-col md:flex-row">
            <div class=" w-full  md:w-1/3 ">
                <div class=" bg-primary p-8 text-white">
                    <CourseCategory />
                </div>
            </div>

             <div class="w-full  md:w-2/3" >
                <div class="bg-gray-200 py-8">
                    <ContentPreview />                            
                </div>
            </div>          
        </div>

    </section>
</template>


<script>
import CourseCategory from '~/components/Service/CourseCategory'
import ContentPreview from '@/components/Service/ContentPreview'

export default {
    components: {
        ContentPreview, 
        CourseCategory
    }
}
</script>

