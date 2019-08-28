<template>
    <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-5xl leading-none py-4">Safety Passport Courses.</h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
            <div class="w-1/3 ">
                <CourseCategory/>
            </div>

            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">
                       <!--Title-->
                        <h1 class="flex items-center font-sans font-bold break-normal text-primary text-xl md:text-2xl pb-4"> 
                         <a class="underline mx-2" href="#">SPA</a> COURSES 
                        </h1>
                        <!--Card-->
                        <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                                         
                            <table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
                                <thead>
                                    <tr class=" text-left ">
                                        <th data-priority="1">Course Name</th>
                                        <th data-priority="2">Duration</th>
                                        <th data-priority="3">Type of Delivery</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                      <tr>
                                        <td>Petrol Retail Safety Passport</td>
                                        <td>2 Days</td>
                                        <td>Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline"> 
                                            <nuxt-link to="/courses/_safety passport/Petrol_Retail_Safety_Passport">View Course Details</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                
                            </table>
							
                            </div>
                            <!--/Card-->

                            
                        
            </article>

            <article class="px-10 pt-5">
                       
                       

                            <h3 class=" md:text-2xl font-medium underline text-primary">Cost</h3>

                            <div class="">
                                <p>We would be happy to provide you with a no obligation quote for the cost of your IOSH/NEBOSH Courses.</p>
                                <p>To arrange for your an IOSH/NEBOSH course from Protec Consulting, or request a no obligation quote, please call us on <span class=" text-primary font-bold"> +254 715 742 898</span> or <span class=" text-primary font-bold">email info.ea@weareprotecafrica.com</span></p>
                            </div>
                        
            </article>
                    
            </div>
        </div>
                 
        </div>

        

    </section>
</template>

<script>

import CourseCategory from "~/components/Course/CourseCategory.vue"


export default {

    components: {
        CourseCategory
    }
    
}
</script>