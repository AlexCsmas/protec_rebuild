<template>

     <section>
        <div class="w-full bg-white">

           
            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Emergency First Aid at Work	</h1>
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
                               At the end of this course, delegates will be able to:
                               Assess emergency situations and carry out appropriate action, including informing emergency services; 
                               Carry out artificial ventilation and chest compressions; Place casualty into the recovery position and know how to use this position; 
                               Clear obstructed airway; Control severe bleeding;
                               Recognise and treat shock; Understand the requirements of a first aid kit and how to report accidents in the workplace; Recognise and treat major illnesses; Deal with burns and scolds; 
                               Recognise and treat fractures
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
                                    <li class="pl-3 ">Assessing the casualty and situation</li>
                                    <li class="pl-3 ">Cardio-pulmonary resuscitation (CPR)</li>
                                    <li class="pl-3 ">Choking and Asthma</li>
                                    <li class="pl-3 ">The first aid kit and reporting procedures</li>
                                    <li class="pl-3 ">Heart attack, seizures and diabetes</li>
                                    <li class="pl-3 ">Fractures</li>
                                    <li class="pl-3 ">The unconscious casualty</li>
                                    <li class="pl-3 ">Head injuries</li>
                                    <li class="pl-3 ">Severe bleeding</li>
                                    <li class="pl-3 ">Shock</li>
                                    <li class="pl-3 ">Burns and Scolds</li> 
                                                          

                                
                            </div>

                            <div>
                                    <h4 class=" text-2xl text-primary pt-2">Target Audience</h4>
                                    <p>This course is designed for anyone involved in a workplace, whether employer or employee who are required to provide First Aid in accordance with Health and Safety (First Aid) Regulations 1981</p>                                    
                            </div>

                            <div>
                                    <h4 class=" text-2xl text-primary pt-2">Pre-Course Preparation</h4>
                                    <p>This course involves theoretical and practical elements, therefore delegates will need to dress appropriately for carrying out floor-based tasks such as CPR</p>                                    
                            </div>

                            <div>
                                    <h4 class=" text-2xl text-primary pt-2">Certification</h4>
                                    <p>Delegates who successfully complete this course, including the practical assessments will receive a PROTEC EFAW certificate valid for one year</p>                                    
                            </div>

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