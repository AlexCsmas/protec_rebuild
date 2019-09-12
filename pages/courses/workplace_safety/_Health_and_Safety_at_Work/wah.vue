<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">Working at Height Awareness Course</h1>
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
                                To increase awareness of the risks of working at height and of using access, ladders or platform equipment.
                            </p>

                            <p>
                                By the end of the course attendees will be able to:
                            </p>

                            <div class=" -pl-3">
                                 <li class="pl-3 ">state what is meant by working at height, and what legal requirements must be borne in mind when carrying out such work</li>
                                 <li class="pl-3 ">state the legal duties placed on individuals regarding working at
height and of those who control such work</li>
                                 <li class="pl-3 ">understand the legal requirements relating to the use of access
platforms, ladders and scaffolding and scaffold towers</li>
                                 <li class="pl-3 ">state the three fundamentals of reducing risk from working at height</li>
                                 <li class="pl-3 ">carry out a suitable and sufficient assessment of the risks when
working at height</li>
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
                                    Legal requirements
                                    <li class="pl-3 ">Work at Height Regulations</li>
                                    <li class="pl-3 ">Health and Safety at Work Act</li>
                                    <li class="pl-3 ">Management of Health and Safety at Work Regulations</li>
                                    Risk assessment
                                    <li class="pl-3 ">General</li>
                                    <li class="pl-3 ">Specific</li>
                                   
                                    Risk control
                                    <li class="pl-3 ">Hierarchy of risk control when working at height</li>

                                    Good practice
                                    <li class="pl-3 ">Ladders and Step Ladders</li>
                                    <li class="pl-3 ">Mobile Towers</li>
                                    <li class="pl-3 ">Roof Work</li>
                                    <li class="pl-3 ">Inspections</li>
                                </div>

                                <div>
                                    <h4 class=" text-2xl text-primary pt-2">Target Audience</h4>
                                    <p>Designed for those who .work at height, or control the actions of others
who do.</p>                                    
                                </div>

                                <h4 class=" text-2xl text-primary pt-2">Pre-Course Preparation</h4>
                                <p>None required</p>           

                                </table>
                                    
                                </div>
                                <h4 class=" text-3xl font-bold text-primary">Booking</h4>
                                        <p>Please call us on <span class=" text-primary font-bold"> +254 715 742 898</span> or <span class=" text-primary font-bold">email info.ea@weareprotecafrica.com</span> to arrange for your level 2 First Aid Training Certificate from Protec Consulting, or request a no obligation quote, </p>
                                        
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