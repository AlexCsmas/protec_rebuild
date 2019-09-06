<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">First Aid-Level 1</h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
           
            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">

                        <div>
                            <!--Title-->

                               
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

         
                                        <h4 class=" text-3xl font-bold text-primary pt-8">Duration</h4>
                                        <p>2 Day</p>
                                        
                                        <h4 class=" text-3xl font-bold text-primary pt-8">Location</h4>
                                        <p>Client Specific Location</p>


                                        <h4 class=" text-2xl text-primary">Course Outline </h4>
                                        <p>Emergency scene management</p>
                                        
                                        <div class=" -pl-3">
                                            <li class="pl-3 ">Primary survey</li>
                                            <li class="pl-3 ">Secondary survey</li>
                                            <li class="pl-3 ">SAMPLE history</li>
                                        <p>Anatomy & physiology</p>
                                        <p>First aid procedures</p>
                                        </div>
                                        
                                        <div class=" -pl-3">
                                            <li class="pl-3 ">CPR</li>
                                            <li class="pl-3 ">Abdominal Thrust</li>
                                            <li class="pl-3 ">Recovery Position</li>
                                        <p>Emergency situations & common injuries</p>
                                        
                                        <div class=" -pl-3">
                                            <li class="pl-3 ">Bleeding</li>
                                            <li class="pl-3 ">Burns</li>
                                            <li class="pl-3 ">Choking</li>
                                            
                                            <li class="pl-3 ">Drowning</li>
                                            <li class="pl-3 ">Electric shock</li>
                                            <li class="pl-3 ">Fractures</li>
                                            <li class="pl-3 ">Heart attack</li>
                                            <li class="pl-3 ">Poisons</li>
                                            <li class="pl-3 ">Shock (circulatory)</li>
                                            <li class="pl-3 ">Unconsciousness</li>
                                            <li class="pl-3 ">Wounds</li>
    
                                        </div>

                                     </div>
                                     
            
                                </table>
                                    
                                </div>
                                <h4 class=" text-3xl font-bold text-primary">Booking</h4>
                                        <p>Please call us on <span class=" text-primary font-bold"> +254 715 742 898</span> or <span class=" text-primary font-bold">email info.ea@weareprotecafrica.com</span> to arrange for your level 1 First Aid Training Certificate from Protec Consulting, or request a no obligation quote, </p>
                                        
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