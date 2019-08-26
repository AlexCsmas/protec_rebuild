<template>

        <section>
        <div class=" text-center ">
            Course Category Page
        </div>

        <div class=" flex ">
             <div class=" w-1/3 ">
      
                <CourseCategory />

             </div>

              <div class=" w-2/3 ">
                <CourseDetail 
                    v-for="course in categories"
                    :key="course.id"
                    :title="course.title"
                    :previewText="course.previewText"   
                    :excerpt="course.excerpt"
                    :thumbnail="course.thumbnail"
                    :id="course.id"                    
                /> 

                
              </div>
        </div>
            
       
</section>

</template>

<script>

import CourseCategory from '@/components/Course/CourseCategory'
import CourseDetail from '@/components/Course/CourseDetail'

export default {

    components: {
        CourseCategory, 
        CourseDetail
    }, 

    asyncData() {
        return new Promise((resolve,) => {
            setTimeout(() => {
                resolve({
                    categories: [
                {
                         id: "IOSH-Managing Safely",
                         title: "IOSH", 
                         previewText: "List of all IOSH Courses", 
                         excerpt: " Best suited for leaders especially Managers and Executives", 
                         thumbnail: "https://www.fortlauderdaledaily.com/sites/default/files/upfront/originalimages/pizza_festival3.jpg"
                     }, 
                     {
                         id: "NEBOSH-IGC",
                         title: "NEBOSH-IGC", 
                         previewText: "The Best Lasagna", 
                         excerpt: " Best Lasagna made by the best Chef in Kenya Tim", 
                         thumbnail: "http://www.vegantarifler.com/wp-content/uploads/2017/10/vegetarian-lasagna-horiz-a-2000.jpg" 
                     }

                    ]
                })
            }, 1500)
        })
    }
    
}
</script>