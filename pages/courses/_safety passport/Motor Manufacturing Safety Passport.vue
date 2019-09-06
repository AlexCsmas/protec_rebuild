<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Motor Manufacturing Safety Passport	</h1>
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
                                                <li class="pl-3 ">To provide basic information and areas of responsibility for health, safety and the environment.</li>
                                                <li class="pl-3 ">To understand the implications of hazard recognition/risk assessment and effects on individuals and the employer.</li>
                                                <li class="pl-3 ">To demonstrate how individual behaviour can help reduce accidents.</li>
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
                                                <li class="pl-3 ">Demonstrate their understanding of the subjects by successfully completing each module assessment paper</li>
                                                <li class="pl-3 ">Appreciate how they personally can influence good standards within health, safety & the environment</li>
                                                <li class="pl-3 ">Understand the value of risk assessment and have the knowledge to recognise when change to a generic assessment is required</li>
                                                 <li class="pl-3 ">Understand the common hazards associated with work.</li>
                                            </div>

                                                                                   
                                            <h4 class=" text-3xl font-bold text-primary pt-8">Coruse Modules</h4>
                                            

                                           

                                            <h4 class=" text-2xl text-primary">Module 1 – Provision and use of work equipment</h4>
                                            <p>Will give delegates an understanding of:- work equipment, maintenance, training, dangerous parts of machinery and controls and control systems.</p>

                                            <h4 class=" text-2xl text-primary">Module 2 – Machine hazards</h4>
                                            
                                            <p>This module examines specific hazards, control measures, mechanical handling, lifting operations and lifting equipment regulations (LOLER).</p>


                                            <h4 class=" text-2xl text-primary">Module 3 – Safe systems of work/permits to work</h4>

                                            The session will give delegates an understanding of safe systems of work / permits to work relating to hot work, confined spaces, trenches and pits, working at height, high voltage equipment, stored pressure, automatic machinery and Construction Regulations.

                                             <h4 class=" text-2xl text-primary">Module 4 – Environmental management</h4>
                                            
                                            <p>The session covers current and future environmental requirements, safe storage and marking, waste control hierarchies and emergency planning in the event of problems.</p>

                                            <h4 class=" text-2xl text-primary">Module 5 – Control of contractors</h4>
                                            
                                            <p>The session gives delegates an understanding of:- 
                                             <div class=" -pl-3">
                                                <li class="pl-3 ">approval systems</li>
                                                <li class="pl-3 ">site induction</li>
                                                <li class="pl-3 ">site access</li>
                                                <li class="pl-3 ">behaviour</li>
                                                <li class="pl-3 ">housekeeping</li>
                                                <li class="pl-3 ">smoking</li>
                                                <li class="pl-3 ">drugs/alcohol</li>
                                                <li class="pl-3 ">smoking</li>
                                                <li class="pl-3 ">ppe and transport</li>
                                                
                                               
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