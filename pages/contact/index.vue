<template>


    <section>
       <div class="w-full bg-white">

		    <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-5xl leading-none py-4">Contact Us</h1>
				<p class="leading-loose text-gray-dark">
					Let have a conversation. 
				</p>
			</div>
			<!-- /title -->

            <div class=" mx-auto lg:px-16">

                <div class=" md:flex flex-row ">

                    <div class="w-full md:w-1/3 ">
                    <div class=" bg-primary p-8 text-white">
                        <p class="text-white font-bold mb-1">
							Protec Consulting East Africa Limited
						</p>

                        <div class=" py-4 ">

                             <p class="text-white font-bold mb-1">
							Location
                            </p>
                            <p class="text-sm mb-2">
                                Westlands Road,<br>							
                                Madonna House, ,<br>	3rd Floor, Room 314<br>
                                Westlands
                            </p>

                        </div>

                        <div>
                            <p class="text-white font-bold mb-1">
                                Contacts
                            </p>
                            <p class="text-sm mb-2">
                                E: info.ea@weareprotecafrica.com<br>							
                                M: +254 715 742 898<br>	
             
                            </p>
                        </div>
                       
                    </div>


                </div> <!-- End of Column --> 
                
                <div class="w-full md: w-2/3" >
                    <div class="bg-gray-200">

                      <!-- Form --> 
                      <div class=" md: bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                    Full Name
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="John Doe">
                                <p class="text-red text-xs italic">Please fill out this field.</p>
                                </div>
                                <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                Company Name
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Company XYZ --- (Optional)">
                                </div>
                            </div>
                        
                            <div class="-mx-3 md:flex mb-2">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                        Phone Number
                                    </label>
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="+25X XXX XXX XXX">
                                </div>
                                
                                <div class="md:w-1/2 px-3">
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                            City
                                        </label>
                                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Nairobi/Mombasa/Kampala/Dar es Salaam/">
                                    </div>
                                </div>
                            </div>

                            <fieldset class="mb-4">
								<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                        How can we be of assistance
                                       
                                </label>
								<textarea class="block w-full border border-red-300er rounded py-2 px-3 text-sm text-gray-700 h-32" placeholder="This field is required..."></textarea>
								
							</fieldset>

                            <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center md: w-1/5 justify-center">
                                <span class="mr-2">Send</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                </svg>
                            </button>

                        </div>

                      <!-- End of Form -->              
                    </div>
                </div>   <!-- End of Column --> 

                </div> <!-- End of Row -->

                      
            </div>


		</div>
    </section>
</template>

<script>
import Posts from '~/components/Posts.vue'

export default {
  components: {
    Posts
  },
  // ...
}
</script>