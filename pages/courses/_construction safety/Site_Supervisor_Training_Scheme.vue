<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Site Supervisor Training Scheme (SSSTS)
</h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
           
            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">

                        <div>
                            <!--Title-->

                            <h4 class=" text-3xl font-bold text-primary">Aims & Objectives</h4>

                                <div>
                                    <p class="pt-2 pb-6">The CITB 2-day Site Supervisors Safety Training Scheme (SSSTS) is a highly regarded health and safety training course within the construction industry. It is available for current and prospective site supervisors, and is taken by more than 40,000 people each year. <br>

The highly-interactive method of delivery of this course makes it interesting, and it allows for discussion and understanding of the subject areas together with engaging, practical exercises.</p>
                                
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
                                        
                                            
                                            <h4 class=" text-3xl font-bold text-primary">Aims & Objectives</h4>
                                            <p>The SSSTS health and safety course is approved by CITB, because it helps site supervisors (and anyone wanting to become one) to develop:</p>
                                                <ul>
                                                    <li>A better understanding of the legal, moral and social responsibilities of their role</li>
                                                    <li>To understand the problems of the Industry, accidents, itinerant workforce</li>
                                                    <li>To understand how the supervisor role fits into the site management structure.</li>
                                                    <li>How to communicate health and safety on site, including CDM, working at height, toolbox talks to identify and avoid potential hazards on site, including COSHH</li>
                                                    <li>A better understanding of the legal, moral and social responsibilities of their role</li>
                                                </ul>
                                            <p>This industry-recognized training course is ideal for all companies involved in construction – site clearance, ground and road works, building, assembly, civil engineering, installation, maintenance, decorating or demolition.</p>
                                             <h4 class=" text-3xl font-bold text-primary">Duration</h4>
                                            <p>2 Days</p>
                                            <h3 class=" text-3xl font-bold text-primary">Course Content</h3>
                                            <p>Locations nationwide and/or client specific</p>
                                            <h4 class=" text-3xl font-bold text-primary">Course Modules</h4>
                                            The course covers The Health & Safety at Work Act and other regulations and requirements relevant to the construction industry, including;
                                                <ul>
                                                    <li>Health and Safety at Work Act</li>
                                                    <li>Specific site issues</li>
                                                    <li>Working at height, COSHH</li>
                                                    <li>Toolbox talks</li>
                                                    <li>Control of subcontractors</li>
                                                    <li>Health issues</li>
                                                    
                                                </ul>

                                            During the course, candidates must pass core exercises. At the end of the course, each individual has to pass a multiple choice test which qualifies them for the Construction Site Supervisors Managers Safety Certificate.

                            
                                            <h4 class=" text-2xl font-bold text-primary">Target Audience</h4>

                                            <p>The course is intended for new and prospective site supervisors as well as proprietors of small to medium sized companies. Client-based personnel would also benefit from attending the course.</p>

                                            <h4 class=" text-2xl font-bold text-primary">Assessment</h4>
                                            This is determined by reaching a minimum level of achievement against four criteria:

                                                 <ul>
                                                    <li>Full attendance of all course sessions</li>
                                                    <li>Performance in each of core exercises</li>
                                                    <li>An overall review by the course tutor</li>
                                                    <li>A pass mark in the multi-choice paper</li>
                                                    
                                                    
                                                </ul>
                                           
                                            <h4 class=" text-3xl font-bold text-primary">Certification</h4>
                                            <p>Successful candidates will be awarded the CITB Site Supervisor Safety Training Certificate</p>
                                            
                                            
 
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
