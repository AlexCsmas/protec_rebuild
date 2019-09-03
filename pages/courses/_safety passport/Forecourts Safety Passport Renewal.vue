<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Petrol Retail Safety Passport</h1>
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
                                    <p class="pt-2 pb-6">This qualification is designed for people with safety responsibilities in Process Industries e.g Oil & Gas, Chemicals, Plastics and Pharmaceuticals.<br>

                                    This course is designed to equip workers with a broad understanding of the accepted principals and recognized industrial practices for the management of Process risk. <br>

                                    It will also ensure that they can organise and contribute to the control of Process Safety Hazards.</p>
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
                                        
                                            
                                            <h4 class=" text-3xl font-bold text-primary">Duration</h4>
                                            <p>2 Days</p>
       

                                            <h3 class=" text-2xl font-bold text-primary">Course Modules</h3>

                                            

                                            <div class=" -pl-3">
                                                <li class="pl-3 ">Start of Day Preparation</li>
                                                <li class="pl-3 ">Task and Site Hazards</li>
                                                <li class="pl-3 ">Petrol Properties</li>
                                                <li class="pl-3 ">LPG</li>
                                                <li class="pl-3 ">Task and Site Hazards</li>
                                                <li class="pl-3 ">LPG Systems and Storage</li>
                                                <li class="pl-3 ">Hazardous Areas</li>
                                                <li class="pl-3 ">Zone Classification</li>
                                                <li class="pl-3 ">Excavation</li>
                                                <li class="pl-3 ">Working at Height</li>
                                                <li class="pl-3 ">PPE</li>
                                                <li class="pl-3 ">HCS Risk Assessment</li>
                                                <li class="pl-3 ">Hazardous Substances</li> 
                                                <li class="pl-3 ">Asbestos Hazards</li> 
                                                <li class="pl-3 ">Nosie at Work</li> 
                                                <li class="pl-3 ">Manual Handling</li> 
                                                <li class="pl-3 ">Environmental Protection</li> 
                                                <li class="pl-3 ">Environment and Waste</li> 
                                                <li class="pl-3 ">Completion and Handback</li>                                                
                                                
                                                
                                                

                                             
                                            </div>
                                          


                                            
                                            


 
                                    </div>
                                        
                                        
                                    </table>
                                    
                                </div>
                                <h4 class=" text-3xl font-bold text-primary">Booking</h4>
                                        <p>Please call us on <span class=" text-primary font-bold"> +254 715 742 898</span> or <span class=" text-primary font-bold">email info.ea@weareprotecafrica.com</span> to arrange for your Petrol Retail Course from Protec Consulting, or request a no obligation quote, </p>
                                        
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