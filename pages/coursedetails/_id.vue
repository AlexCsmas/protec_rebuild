<template>
    <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-5xl leading-none py-4"> {{ post.title }} </h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
           
            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">

                      <h1> {{ post.title }} </h1>
                      <p> {{ post.content }} </p>
                        
                    </article>
                    
                 </div>
             </div>

            <!-- <div class="w-1/3 ">
                    <div class=" bg-primary p-8 text-white">
                        <ul class=" px-8 ">
                        
                            <h3 class=" text-2xl pt-4">Select a Category</h3>
                                <nuxt-link to="/courses/coursecat" class=" border-b border-bg-secondary text-white">Safety Management Courses</nuxt-link>
                                <li>Construction Safety Courses</li>
                                <li>Safety Passport Schemes Courses</li>
                                <li>Workplace Safety Training Courses</li>
                                <li>Confined Space, Equipment and Plant Training Courses</li>
                                <li>Working at Height Courses</li>
                                <li>Sector Specific (Petroleum, Rail, Food, OMC) Courses</li>
                                <li>Environmental and Quality Management Courses</li>

                        </ul>
                    </div>
            </div> -->
                    
            </div>

    </section>
</template>


<script>


export default {

   
    data () {
        return {
            id: this.$route.params.id,
                coursedetails: [
                    {
                        id: 'Hello', 
                        title: 'What is Balut?', 
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis ab aliquid nobis optio quo deleniti dolor fugiat magni itaque omnis explicabo error doloribus, velit provident facilis porro numquam modi doloremque.'

                    }, 
                    {
                        id: 'IOSH', 
                        title: 'What is IOSH?', 
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab aliquid nobis optio quo deleniti dolor fugiat magni itaque omnis explicabo error doloribus, velit provident facilis porro numquam modi doloremque.'

                    }, 
                    {
                        id: 'NEBOSH', 
                        title: 'What is NEBOSH?', 
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab aliquid nobis optio quo deleniti dolor fugiat magni itaque omnis explicabo error doloribus, velit provident facilis porro numquam modi doloremque.'

                    }

                ]
        }
    }, 
    computed: {
        post () {
            return this.coursedetails.find(post => post.id=== this.id)
        }
    }
    
}
</script>