<template>
    <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-5xl leading-none py-4">IOSH Managing Safely Course</h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
           
            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">

                       <CourseId />
                        
                    </article>
                    
            </div>
        </div>

         <div class="w-1/3 ">
                <div class=" bg-primary p-8 text-white">
                    <ul class=" px-8 ">
                        <h3 class=" text-2xl">CONSULTANCY SERVICES</h3>                        
                            <li>Health & Safety Consultancy</li>
                            <li>Fire Risk Assessment / Fire Safety Audit</li>

                        <h3 class=" text-2xl pt-4">TRAINING SERVICES</h3>
                            <nuxt-link to="/courses/coursecat" class=" border-b border-bg-secondary text-white">Safety Management – IOSH Courses</nuxt-link>
                            <li>Construction Safety Courses</li>
                            <li>Safety Passport Schemes</li>
                            <li>Workplace Safety Training Courses</li>
                            <li>Confined Space, Equipment and Plant Training</li>
                            <li>Working at Height Courses</li>
                            <li>Sector Specific (Petroleum, Rail, Food, OMC)</li>
                            <li>Environmental and Quality Management</li>

                    </ul>
                </div>
            </div>
                 
        </div>

        

    </section>
</template>


<script>

import CourseId from '@/components/Course/CourseId'
export default {

    components: {
        CourseId
    }
    
}
</script>