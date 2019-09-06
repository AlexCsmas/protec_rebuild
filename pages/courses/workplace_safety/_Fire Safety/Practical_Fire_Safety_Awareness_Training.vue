<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Practical Fire Safety Awareness</h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
           
            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">

                        <div>
                            <!--Title-->

                                <div>

                                    <h3 class=" text-2xl font-bold text-primary "> Course aim</h3>

                                    <p>This course is designed specifically to provide both knowledge and awareness of:</p>

                                           
                                        <div class=" -pl-3 pb-8">
                                            <li class="pl-3 ">The procedures to be followed in the event of fire</li>
                                            <li class="pl-3 ">How to call the fire service and liaise on site</li>
                                            <li class="pl-3 ">Identify which elements need to exist for fire to occur</li>
                                            <li class="pl-3 ">The three basic principles of fire extinction</li>

                                            <li class="pl-3 ">Identify the four classes of fire</li>
                                             <li class="pl-3 ">The principles and practice of fire risk assessment</li>
                                             <li class="pl-3 ">Basic fire prevention</li>
                                             <li class="pl-3 ">Arson prevention</li>
                                             <li class="pl-3 ">Personal protection</li>
                                             <li class="pl-3 ">The need for fire safety and how to implement measures to protect yourselves, colleagues and clients</li>
                                             <li class="pl-3 ">Use of correct fire equipment</li>
                                             <li class="pl-3 ">Evacuation procedures and the control of personnel</li>
                                        </div>

                                          
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

                                    <div class=""> 

                                        <h3 class=" text-2xl font-bold text-primary">Target Audience</h3>

                                        <p>This course is practical and theoretical course is designed for personnel who require “initial” and/or “refresher” training in fire-fighting and evacuation techniques</p>

                                               
                                        <h4 class=" text-3xl font-bold text-primary pt-8">Duration</h4>
                                        <p>1 Day</p>
                                        
                                        <h4 class=" text-3xl font-bold text-primary pt-8">Location</h4>
                                        <p>Client Specific Location</p>


                                        <h4 class=" text-2xl text-primary">Course Outline </h4>
                                        
                                        <div class=" -pl-3">
                                            <li class="pl-3 ">Fire risk assessment principles and practicals</li>
                                            <li class="pl-3 ">The fire triangle</li>
                                            <li class="pl-3 ">Heat transfer</li>
                                            <li class="pl-3 ">Common sources of fire</li>
                                            <li>Fire extinguishers (including practical extinguisher discharges)</li>
                                            <li>Fire Exits, Emergency Exit Routes, Signs</li>
                                            <li>Emergency Lighting & Fire Alarms</li>
                                            <li>Evacuation procedures</li>
                                            
                                        </div>

                                     </div>
            
                                </table>
                                    
                                </div>
                                <h4 class=" text-3xl font-bold text-primary">Booking</h4>
                                        <p>Please call us on <span class=" text-primary font-bold"> +254 715 742 898</span> or <span class=" text-primary font-bold">email info.ea@weareprotecafrica.com</span> to arrange for your Practical Fire Safety Awareness Course from Protec Consulting, or request a no obligation quote, </p>
                                        
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