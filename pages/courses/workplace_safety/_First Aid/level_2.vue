<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">First Aid-Level 2</h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
           
            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">

                        <div>
                            <!--Title-->

                               
                                <ul class="flex">
                                    <li class="flex-1 mr-2">
                                        <a class="text-center block border border-gray-500 rounded py-2 px-4 bg-primary hover:bg-secondary text-white" href="#">Details</a>
                                    </li>
                                    <li class="flex-1 mr-2">
                                        <a class="text-center block border border-white rounded hover:border-gray-200 text-primary hover:bg-gray-200 py-2 px-4" href="#">Dates</a>
                                    </li>
                                    <li class="text-center flex-1">
                                        <a class="block py-2 px-4 text-primary " href="#">Book Course</a>
                                    </li>
                                </ul>
                                
                                <!--Card-->
                                <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                                                    
                                <table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">

         
                                        <h4 class=" text-3xl font-bold text-primary pt-8">Duration</h4>
                                        <p>2 Day</p>
                                        
                                        <h4 class=" text-3xl font-bold text-primary pt-8">Location</h4>
                                        <p>Client Specific Location</p>


                                        <h4 class=" text-2xl text-primary">Course Outline </h4>
                                        
                                        <div class=" -pl-3">
                                            <li class="pl-3 ">Understanding the laws of First Aid</li>
                                            <li class="pl-3 ">Potential Hazards in the work environment</li>
                                            <li class="pl-3 ">Treating Wounds and Stopping bleeding</li>
                                            <li class="pl-3 ">Knowing what first aid is needed for different types of injuries</li>
                                            <li class="pl-3 ">Using the correct equipment and safety precautions when administering First Aid</li>
                                        
                                        </div>
 
            
                                </table>
                                    
                                </div>
                                <h4 class=" text-3xl font-bold text-primary">Booking</h4>
                                        <p>Please call us on <span class=" text-primary font-bold"> +254 715 742 898</span> or <span class=" text-primary font-bold">email info.ea@weareprotecafrica.com</span> to arrange for your level 2 First Aid Training Certificate from Protec Consulting, or request a no obligation quote, </p>
                                        
                        </div>
                        
                    </article>
                    
            </div>
        </div>

         <div class="w-1/3 ">
                <CourseCategory />
            </div>
                 
        </div>

        

    </section>
   
</template>


<script>
import CourseCategory from "~/components/Course/CourseCategory.vue"
export default {
    components: {CourseCategory}
}
</script>