<template>

<div>
<div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-5xl leading-none py-4">{{ course.title }}.</h1>
			</div>
			<!-- /title -->

        </div>

<div class=" flex">

    <div class=" w-2/3">

    
        <div class=" py-6 px-6 h-auto ">
          
             <div class=" border border-gray-400 lg:border lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <p class="text-sm text-gray-600 flex items-center justify-end">
                        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                    {{ course.id }}
                    </p>
                    <div class="text-gray-900 font-bold text-xl mb-2">{{ course.title }}</div>
                    <p class="text-gray-700 text-base">{{ course.excerpt }}</p>
                    <div class="">
                            <img class=" py-6 object-cover" :src="course.thumbnail" alt="">
                    </div>
                    <div class="text-gray-700 text-base">{{ course.descriptionText }}</div>
                   
                </div>
                
            </div>

            
        </div>
        
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
           
        </div>
    



    </div>

    <div class=" w-1/3">

     <CourseCategory />   
    
    </div>

</div>

</div>




</template>

<script>


import CourseCategory from '~/components/Course/CourseCategory'
export default {
    components: {
        CourseCategory
    }, 
    asyncData(context) {
        return new Promise((resolve,) => {
            setTimeout(() => {
                resolve({
                    course: [
                    {
                         id: "IOSH",
                         title: " IOSH Managing Safely ", 
                         excerpt: " This course is best suited to equip leaders especially Managers and Executives", 
                         previewText: " By the end of the course, you will  .....", 
                         descriptionText: "For More information, Contact XXXXX",
                         thumbnail: "https://images.unsplash.com/photo-1553946550-4b8f3eea5451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
                     }, 
                     {
                        id: "NEBOSH",
                         title: " NEBOSH IGC ", 
                         excerpt: " This course is best suited to equip leaders especially Managers and Executives", 
                         previewText: " By the end of the course, you will  .....", 
                         descriptionText: "For More information, Contact XXXXX",
                         thumbnail: "https://images.unsplash.com/photo-1553946550-4b8f3eea5451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
                     }

                    ].find(el => el.id === context.params.id)
                })
            }, 1500)
        })
    }
}
</script>


