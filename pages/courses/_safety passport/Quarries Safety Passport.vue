<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Quarries Safety Passport</h1>
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

                                           
                                            <div class=" -pl-3 pb-8">
                                                <li class="pl-3 ">To build on the basic health and safety information from the Core Day programme by identifying high risk tasks and their control found within the Mineral Extraction and Products Industry</li>
                                                <li class="pl-3 ">To understand the implications of personal injury, cost to the business and job security</li>
                                                <li class="pl-3 ">To encourage delegates to participate in identifying hazards and control based on their personal experience.</li>
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

                                            <h3 class=" text-2xl font-bold text-primary">Learning Outcome</h3>

                                            <p>On completion of the course delegates will have the knowledge to:</p>

                                            <div class=" -pl-3">
                                                <li class="pl-3 ">Demonstrate their understanding of the subjects by successfully attaining an 80% score for each of the two assessment papers</li>
                                                <li class="pl-3 ">Appreciate how they personally can influence good standards when working within the sector</li>
                                                <li class="pl-3 ">Clearly understand the need to inform local management of any accident or unplanned event whether personally affected or not.</li>
                                                 <li class="pl-3 ">Understand the value of risk assessment individuals will have the knowledge to recognise when change to a generic assessment is required.</li>
                                            </div>

                                                                                   
                                            <h4 class=" text-3xl font-bold text-primary pt-8">Coruse Modules</h4>
                                            

                                           

                                            <h4 class=" text-2xl text-primary">High risk tasks involved with operations</h4>
                                            <p>Mobile plant is a major cause of serious injury within the industry; the session will examine with delegates cause of such accidents as well how high risks are controlled and how they as individuals can contribute.</p>
                                            <h4 class=" text-2xl text-primary">Access and working at height</h4>
                                            
                                             <p>Many serious injuries have been sustained when falling relatively low heights. Falls from greater heights often result in death or major injuries.</p>


                                            <h4 class=" text-2xl text-primary">Maintenance high risk operations</h4>

                                            <div class=" -pl-3">
                                                <li class="pl-3 ">Safety precautions during normal, maintenance and breakdown work</li>
                                                <li class="pl-3 ">Fencing</li>
                                                <li class="pl-3 ">Isolation / lock-out procedures</li>
                                                <li class="pl-3 ">Permit to Work and example applications:</li>
                                                <li class="pl-3 ">Confined spaces, crusher clearance, conveyor tensioners</li>
                                            </div>

                                            <h4 class=" text-2xl text-primary">Health risks working in dusts, diseases, noise, vibration, and dehydration</h4>

                                            
                                    
                                            <div class=" -pl-3">
                                                <li class="pl-3 ">Control risks measures including PPE</li>
                                               
                                            </div>

                                            <h4 class=" text-2xl text-primary">Environmental considerations</h4>


                                           
                                    
                                            <div class=" -pl-3">
                                                <li class="pl-3 ">Public perception of environmental impacts</li>
                                                <li class="pl-3 ">Powers of inspectors / enforcing authorities and penalties</li>
                                                <li class="pl-3 ">Precautions to avoid spillage and groundwater contamination</li>
                                                <li class="pl-3 ">Waste segregation and disposal</li>
                                                <li class="pl-3 ">Air pollution from dust and noise</li>
                                                <li class="pl-3 ">Ecology and archaeology</li>
                                                
                                                
                                                
                                               
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