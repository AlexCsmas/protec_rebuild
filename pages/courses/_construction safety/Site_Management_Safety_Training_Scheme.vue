<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Site Management Safety Training Scheme</h1>
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
                                    <p class="pt-2 pb-6">This course is designed to ensure those in a Project / Site Management role understand responsibilities and accountability for site safety.</p>
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
                                            <p>5 Days</p>
                                            <h3 class=" text-3xl font-bold text-primary">Course Content</h3>
                                            <p>Locations nationwide and/or client specific</p>
                                            <h4 class=" text-3xl font-bold text-primary">Course Modules</h4>
                                                <ul>
                                                    <li>Site setup</li>
                                                    <li>CDM regulations</li>
                                                    <li>Risk assessments</li>
                                                    <li>Method statements</li>
                                                    <li>Scaffolding</li>
                                                    <li>Electricity</li>
                                                    <li>Excavations</li>
                                                    <li>Demolition</li>
                                                    <li>Confined spaces</li>
                                                    <li>Changes in accepted working practices</li>
                                                </ul>

                            
                                            <h4 class=" text-2xl font-bold text-primary">Target Audience</h4>

                                            <p>Project managers, site managers and supervisors as well as proprietors of small to medium sized companies.</p>

                                            <h4 class=" text-2xl font-bold text-primary">Pre-Course Preparation</h4>

                                            <p>None required</p>
                                           
                                            <h4 class=" text-3xl font-bold text-primary">Certification</h4>
                                            <p>Delegates successfully completing the course will be awarded a CITB Construction Skills Certificate.
Possession of this qualification is listed in the Approved Code of Practice for the Construction (Design and Management) (CDM) Regulations as a demonstration of competence in the role of site manager.</p>
                                            
                                            
 
                                            </div>
                                        
                                        
                                    </table>
                                    
                                </div>
                                <h4 class=" text-3xl font-bold text-primary">Booking</h4>
                                        <p>To arrange for your Site Management Safety Training Scheme Course from Protec Consulting, or request a no obligation quote, please call us on <span class=" text-primary font-bold"> +254 715 742 898</span> or <span class=" text-primary font-bold">email info.ea@weareprotecafrica.com</span></p>
                                        
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

    components: {
               CourseCategory
    }
    
}
</script>
