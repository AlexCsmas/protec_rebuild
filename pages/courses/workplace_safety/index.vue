<template>
    <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-5xl leading-none py-4">Workplace Safety Training Courses.</h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
            <div class="md: w-1/3">
                <CourseCategory/>
            </div>

            <div class="md: w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">
                       <!--Title-->
                        <h1 class="flex items-center font-sans font-bold break-normal text-primary text-xl md:text-2xl pb-4"> 
                        <a class="underline mx-2" href="#">Fire Safety</a> Courses 
                        </h1>
                        <!--Card-->
                        <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                                         
                            <table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
                                <thead>
                                    <tr class=" text-left ">
                                        <th data-priority="1">Course Name</th>
                                        <th data-priority="2">Duration</th>
                                        <th data-priority="3">Type of Delivery</th>
                                       
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class=" md: w-2/5">Basic Fire Fighting</td>
                                        <td class=" md: w-1/5">1 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline  md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td class=" md: w-2/5">Fire Fighting</td>
                                        <td class=" md: w-1/5">1 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline  md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td class=" md: w-2/5">Practical Fire Safety Awareness</td>
                                        <td class=" md: w-1/5">1 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline  md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                
                            </table>
							
                        </div>
                        <!--/Card-->

                        <!--Title-->
                        <h1 class="flex items-center font-sans font-bold break-normal text-primary text-xl md:text-2xl pt-4"> 
                         <a class="underline mx-2" href="#">First Aid</a> Courses 
                        </h1>

                        <!--Card-->
                        <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white ">
                                         
                            <table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
                                <thead class="">
                                    <tr class=" text-left ">
                                         <th data-priority="1">Course Name</th>
                                        <th data-priority="2">Duration</th>
                                        <th data-priority="3">Type of Delivery</th>
                                       
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class=" md: w-2/5">First Aid-Level 1</td>
                                        <td class=" md: w-1/5">2 Days</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline  md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">First Aid-Level 2</td>
                                        <td class=" md: w-1/5">3 Days</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                      
                                    
                                   
                                </tbody>
                                
                            </table>
							
                        </div>
                        <!--/Card-->

                        <!--Title-->
                        <h1 class="flex items-center font-sans font-bold break-normal text-primary text-xl md:text-2xl pt-4"> 
                         <a class="underline mx-2" href="#">Health and Safety at Work</a> Courses 
                        </h1>

                        <!--Card-->
                        <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                                         
                            <table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
                                <thead>
                                    <tr class=" text-left ">
                                        <th data-priority="1">Course Name</th>
                                        <th data-priority="2">Duration</th>
                                        <th data-priority="3">Type of Delivery</th>
                                      
         
                                    </tr>
                                </thead>

                                <!-- HSE @ Work -->
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Manual Handling</td>
                                        <td class=" md: w-1/5">1/2 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Work at Height Awareness</td>
                                        <td class=" md: w-1/5">1/2 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Occupational Noise Awareness</td>
                                        <td class=" md: w-1/5">1/2 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Hand Arm Vibrations Awareness (HAVS)</td>
                                        <td class=" md: w-1/5">1/2 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Lock-­Out Tag-­Out</td>
                                        <td class=" md: w-1/5">1/2 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Accident Investigation</td>
                                        <td class=" md: w-1/5">1/2 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Safety Inspection and Audit</td>
                                        <td class=" md: w-1/5">1/2 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Introduction to Health and Safety</td>
                                        <td class=" md: w-1/5">1/2 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Emergency First Aid at Work</td>
                                        <td class=" md: w-1/5">1/2 Day</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Intermediate Health and Safety for
Supervisors</td>
                                        <td class=" md: w-1/5">3 Days</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                <tbody>
                                    <tr class=" w-full ">
                                        <td class=" md: w-2/5">Advanced Health and Safety for 
Managers</td>
                                        <td class=" md: w-1/5">4 Days</td>
                                        <td class=" md: w-1/5">Classroom</td>
                                        <td class=" bg-primary py-2 text-center text-white hover:underline md: w-1/5"> 
                                            <nuxt-link to="/courses/workplace_safety">View</nuxt-link>
                                        </td>
                                    </tr>
                                    
                                   
                                </tbody>
                                
                                
                            </table>
							
                        </div>
                        <!--/Card-->

                            
                        
            </article>

            <article class="px-10 pt-5">
                       
                       

                            <h3 class=" md:text-2xl font-medium underline text-primary">Cost</h3>

                            <div class="">
                                <p>We would be happy to provide you with a no obligation quote for the cost of your Workplace Safety Training Courses.</p>
                                <p>To arrange for your Workplace Safety Training Courses from Protec Consulting, or request a no obligation quote, please call us on <span class=" text-primary font-bold"> +254 715 742 898</span> or <span class=" text-primary font-bold">email info.ea@weareprotecafrica.com</span></p>
                            </div>
                        
            </article>
                    
            </div>
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