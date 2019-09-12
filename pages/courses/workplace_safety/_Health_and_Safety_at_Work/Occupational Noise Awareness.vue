<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Occupational Noise Awareness</h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
           
            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">

                        <div>
                            <!--Title-->

                            <h4 class=" text-2xl text-primary">Aims & Objectives</h4>

                            <p>
                               To provide participants with the knowledge required to understand the hazards and controls associated with Noise in the Workplace. By the end of the course participants will:-
                            </p>

                          
                            <div class=" -pl-3">
                                 <li class="pl-3 ">Understand the physics of noise & noise terminology</li>
                                 <li class="pl-3 ">Understand how the Human ear works</li>
                                 <li class="pl-3 ">To understand the symptoms and effects of excessive noise</li>
                                 <li class="pl-3 ">Appreciate the key legislation & guidance covering Noise in the workplace – including the requirements and implications of The Control of Noise at Work Regulations 2006 which implement the Physical Agents (Noise) Directive (2003/10/EC)</li>
                                 <li class="pl-3 ">Understand the techniques to adopt to reduce risk associated with noise</li>
                                 <li class="pl-3 ">Understand employers and employees duties</li>
                                 <li class="pl-3 ">To be aware of guidance relating to noise</li>
                            </div>


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
                                  
                                    <li class="pl-3 ">Introduction to Noise</li>
                                    <li class="pl-3 ">Physics of Noise</li>
                                    <li class="pl-3 ">The Human Ear</li>
                                    <li class="pl-3 ">Decibels and Noise Terminology</li>
                                    <li class="pl-3 ">Occupational Noise Regulations</li>
                                    <li class="pl-3 ">Noise Reduction and Management</li>
                                    <li class="pl-3 ">Hearing Protection</li>
                                    <li class="pl-3 ">Video</li>
                                    <li class="pl-3 ">Further Advice & Information</li>
                                    <li class="pl-3 ">End of Course Examination</li>                                    
                                
                                </div>

                                <div>
                                    <h4 class=" text-2xl text-primary pt-2">Target Audience</h4>
                                    <p>Site Operatives, Supervisors and Management</p>                                    
                                </div>

                                <h4 class=" text-2xl text-primary pt-2">Pre-Course Preparation</h4>
                                <p>None required</p>           

                                </table>
                                    
                                </div>
                                <h4 class=" text-3xl font-bold text-primary">Booking</h4>
                                        <p>Please call us on <span class=" text-primary font-bold"> +254 715 742 898</span> or <span class=" text-primary font-bold">email info.ea@weareprotecafrica.com</span> to book a place on this course or request a no obligation quote, </p>
                                        
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