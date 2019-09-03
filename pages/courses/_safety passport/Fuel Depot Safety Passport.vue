<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Fuel Depot Safety Passport</h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
           
            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">

                    <article class="px-10">
                        <div>   
                            <div>
                                    <!-- <p class="pt-2 pb-6">This qualification is designed for people with safety responsibilities in Process Industries e.g Oil & Gas, Chemicals, Plastics and Pharmaceuticals.<br>

                                    This course is designed to equip workers with a broad understanding of the accepted principals and recognized industrial practices for the management of Process risk. <br>

                                    It will also ensure that they can organise and contribute to the control of Process Safety Hazards.</p> -->
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

                        <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                            <table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
                                 <div class=""> 
                                    <h3 class=" text-2xl font-bold text-primary">Module 1: Hazards at a Fuel Depot</h3>
                                    
                                    <div class=" -pl-3">
                                        <li class="pl-3 ">Fuel & vapour hazards</li>
                                        <li class="pl-3 ">Fuel tanker loading hazards</li>
                                        <li class="pl-3 ">Other hazards</li>
                                        <li class="pl-3 ">Contractor hazards</li>
                                        <li class="pl-3 ">Risks – consequences</li>
                                    
                                        <p>Assessment 1</p>
                                               
                                    </div>

                                    <h3 class=" text-2xl font-bold text-primary">Module 2: Controlling work on a forecourt</h3>
                                    
                                   <div class=" -pl-3">
                                                <li class="pl-3 ">Restricted areas</li>
                                                <li class="pl-3 ">Zone classification</li>
                                                <li class="pl-3 ">Communication</li>
                                                <li class="pl-3 ">Documentation</li>
                                                <li class="pl-3 ">Task classification</li>
                                               
                                            <p>Assessment 2</p>   
                                            </div>
                                 </div>

                                 <h3 class=" text-2xl font-bold text-primary">Module 3: Safe working practices</h3>
                                    
                                    <div class=" -pl-3">
                                                <li class="pl-3 ">Setting up your safe place of work</li>
                                                <li class="pl-3 ">Confined spaces</li>
                                                <li class="pl-3 ">Excavations</li>
                                                <li class="pl-3 ">Pipeline work</li>
                                                <li class="pl-3 ">Hot work</li>
                                                <li class="pl-3 ">Working at height</li>
                                                <li class="pl-3 ">LO-TO</li>
                                                <li class="pl-3 ">Electricity</li>
                                                <li class="pl-3 ">Cleaning/ De-gassing</li>
                                                <li class="pl-3 ">Sand/ Grit blasting – Painting</li>
                                                
                                            <p>Assessment 3</p>   
                                </div>

                                <h3 class=" text-2xl font-bold text-primary">Module 4: Practical exercises</h3>
                                    
                                  (Group work)

                            </table>
                        
                        </div>


                    </article>

                    
                    
                </div>
                         
            </div>
            <div class="w-1/3 ">
                <CourseCategory />
            </div>
                 
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