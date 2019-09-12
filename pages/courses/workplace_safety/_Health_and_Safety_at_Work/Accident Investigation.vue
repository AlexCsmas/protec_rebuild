<template>

     <section>
        <div class="w-full bg-white">

           
            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Accident Investigation	</h1>
			</div>
			<!-- /title -->


        </div>

        <div class="w-auto flex flex-row">
           
            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">

                        <div>
                            <h4 class=" text-2xl text-primary">Aims & Objectives</h4>

                            <p class=" mb-3 ">
                               To give participants a full understanding of Accident Investigations. 
                               What is an accident or incident? 
                               Why should you investigate both?
                               How do you find the true cause? How should you investigate?
                               Communicating the results of the investigation.

                            </p>

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

                            <div class=" -pl-3">

                            <h4 class=" text-3xl text-primary">Course Content</h4>   
                                    Legal requirements
                                    <li class="pl-3 ">What is an Accident and what is an Incident</li>
                                    <li class="pl-3 ">Accident reporting procedures</li>
                                    <li class="pl-3 ">RIDDOR reporting procedures</li>
                                    <li class="pl-3 ">On line methods</li>
                                    <li class="pl-3 ">Fatality</li>
                                    <li class="pl-3 ">Major injury</li>
                                    <li class="pl-3 ">Over 3 day injury</li>
                                    <li class="pl-3 ">Work related diseases</li>
                                    <li class="pl-3 ">Dangerous occurrences</li>
                                    <li class="pl-3 ">HSE / Local Authority / Police / Fire Authority / Environment Agency involvement</li>
                                    <li class="pl-3 ">Assembling the investigation team</li> 
                                    <li class="pl-3 ">Investigating techniques</li>
                                    <li class="pl-3 ">Investigation Tool Kit</li>
                                    <li class="pl-3 ">Fact finding</li>
                                    <li class="pl-3 ">Interviewing injured parties and witnesses</li>
                                    <li class="pl-3 ">Root Cause Analysis</li>  
                                    <li class="pl-3 ">The “5 Whys” and “Tap Root” methods of root cause analysis</li>  
                                    <li class="pl-3 ">Report writing</li> 
                                    <li class="pl-3 "> Practical exercise</li>                              

                                
                            </div>

                            <div>
                                    <h4 class=" text-2xl text-primary pt-2">Target Audience</h4>
                                    <p>Designed for people from any part of an Accident Investigation team sector who . might be expected to form. </p>                                    
                            </div>

                            <h4 class=" text-2xl text-primary pt-2">Pre-Course Preparation</h4>
                            <p>None required</p>           


                                

                            </table>
                                    
                            </div>
                            <h4 class=" text-3xl font-bold text-primary">Booking</h4>
                            <p>Please call us on <span class=" text-primary font-bold"> +254 715 742 898</span> or <span class=" text-primary font-bold">email info.ea@weareprotecafrica.com</span> to book a place on this course or request a no obligation quote.</p>
                                        
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