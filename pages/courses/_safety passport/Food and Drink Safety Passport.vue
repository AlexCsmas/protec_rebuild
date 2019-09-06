<template>

     <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-4xl leading-none py-4">FOOD & DRINK SAFETY PASSPORT</h1>
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

                                            <p>Aimed at contractors who work in food and drink manufacturing, the SPA Passport food and drink training programme focuses on hygiene and food safety, specific environmental issues and health and safety practices.</p>

                                            <div class=" -pl-3 pb-8">
                                                <li class="pl-3 ">To provide information and training relevant to the food and drink industry sector in respect of food hygiene, environmental concerns and health and safety so as to support the continued improvement of such standards throughout the sector.</li>
                                                <li class="pl-3 ">To understand the implications for cost, business, job security and risk of injury if concerns for hygiene, environment and health and safety are not properly considered</li>
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
                                                <li class="pl-3 ">Compare injury incident rates across some industry sectors</li>
                                                <li class="pl-3 ">Understand the importance of training, awareness and good personal behaviour in reducing potential for harm</li>
                                                <li class="pl-3 ">Recognise the implications for cost, job security and risk of injury if areas of concern are not addressed and controlled</li>
                                                 <li class="pl-3 ">Understand the three main areas of concern as food damage, environmental damage and people damage.</li>
                                            </div>

                                                                                   
                                            <h4 class=" text-3xl font-bold text-primary pt-8">Module 1 – Food protection</h4>
                                            <p>Will give delegates an understanding of the potential sources and types of food contamination, sources and effects of contamination, safe working practices to eliminate or reduce risk, the importance of protective clothing and good personal hygiene.</p>

                                            <h4 class=" text-3xl font-bold text-primary">Module 2 – Environmental protection</h4>
                                            <p>This module examines what makes a safe place of work, safe behaviour, safe access and exits, safety signs, temperature, lighting, housekeeping and welfare facilities, slips and trips, reporting failures and defects, safe work at height, excavations and confined spaces.
</p>

                                            <h4 class=" text-3xl font-bold text-primary">Module 3 – Health and safety</h4>
                                            <p>This module provides an awareness and understanding of the hazards to health and safety particularly relevant to the food and drink sector and the control measures necessary to such risks to continually reducing levels.
</p>

                                            
                                            
 
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