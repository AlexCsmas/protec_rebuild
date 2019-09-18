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

                        <form name="form2" method="post" netlify>
                            <div class="flex flex-col md: flex-row mx-auto px-16 pb-4">
                                <div class="py-4">
                                    <p>
                                        <label>Your Name: <input type="text" name="name" /></label>   
                                    </p>
                                </div>
                                <div class="py-4">

                                    <p>
                                        <label>Your Email: <input type="email" name="email" /></label>
                                    </p>

                                </div>

                                <div class=" flex items-center">
          
                                    <p class="">
                                        <label>Your Role: <select name="role[]" multiple> <br>
                                        <option value="leader">Leader</option>
                                        <option value="follower">Follower</option>
                                        </select></label>
                                    </p>

                                </div>

                                <div class="py-4">
                                <p>
                                    <label>Message: <textarea name="message"></textarea></label>
                                </p>
                            </div>

                            <p>
                                <button type="submit" class="py-8">Send</button>
                            </p>

                            </div>

                            
                        </form>

                                 
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