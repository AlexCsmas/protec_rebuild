<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">FACILITY MANAGEMENT SAFETY PASSPORT</h1>
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

                                            <p>This course is designed to assist the delgeate to:</p>

                                            <div class=" -pl-3 pb-8">
                                                <li class="pl-3 ">Provide basic information and areas of responsibility for health, safety and the environment.</li>
                                                <li class="pl-3 ">Understand the implications of hazard recognition/risk assessment and effects on individuals and the employer.</li>
                                                <li class="pl-3 ">Demonstrate how individual behaviour can help reduce accidents.</li>
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
                                                <li class="pl-3 ">Appreciate how they personally can influence good standards within health, safety & and environment</li>
                                                <li class="pl-3 ">Understand the value of risk assessment and have the knowledge to recognise when change to a generic assessment is required</li>
                                                 <li class="pl-3 ">Understand the common hazards associated with work.</li>
                                            </div>

                                                                                   
                                            <h4 class=" text-3xl font-bold text-primary pt-8">Module 1 – Organising for safety</h4>
                                            <p>Will give delegates an understanding of:- the legal responsibilities of employers and employees, the role of enforcing authorities, what makes a vulnerable worker, hazard identification and control and an understanding of The Construction Regulations.</p>

                                            <h4 class=" text-3xl font-bold text-primary">Module 2 – The Workplace
</h4>
                                            <p>This module examines what makes a safe place of work, safe behaviour, safe access and exits, safety signs, temperature, lighting, housekeeping and welfare facilities, slips and trips, reporting failures and defects, safe work at height, excavations and confined spaces.
</p>

                                            <h4 class=" text-3xl font-bold text-primary">Module 3 – Tools, plant and machinery</h4>
                                            <p>The session will give delegates an understanding of the risks presented by both powered and non powered work equipment and the risks associated with the various forms of energy created. In addition the risks faced with the use of workplace transport.
</p>

                                            <h4 class=" text-3xl font-bold text-primary">Module 4 – Health</h4>
                                            <p>The session highlights the risks and controls for substances hazardous to health together with other ill health risks from workplace activities, including musculoskeletal problems, effects of noise and stress. In addition candidates will be made aware of the varied precautions which can be taken.</p>

                                            <h4 class=" text-3xl font-bold text-primary">Module 5 – Procedures</h4>
                                            <p>Candidates will be shown the need and benefits of procedures, including: the importance of local emergency procedures and first aid arrangements.</p>

                                            <h4 class=" text-3xl font-bold text-primary">Module 6 – The Environment</h4>
                                            <p>The module covers current and future environmental requirements, safe storage and marking, waste control hierarchies and emergency planning in the event of problems.<br>The Safety Pass Alliance work with employers, employer associations, trade unions, NTO and other relevant bodies to design and develop training programmes tailored to suit each sector.</p>
                                            
                                            
 
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