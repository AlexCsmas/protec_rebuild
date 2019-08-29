<template>
    <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-5xl md:text-5xl leading-none py-4">Courses.</h1>
			</div>
			<!-- /title -->

        </div>

        <div class="w-auto flex flex-row">
            <div class="w-1/3 ">
                <div class=" bg-primary text-white">
                       <CourseCategory />
                </div>
            </div>

            <div class="w-2/3" >
                <div class="bg-gray-200 py-8">
                    <div class="px-10">
                        <p class=" pb-2 ">We are a leading International Health, Safety and Environmental Training and Consultancy provider.</p>
                        <p class=" pb-2 ">The service we offer will develop your current systems, give guidance on improving your documentation and safety culture, as well as providing a robust auditing program and acting as your competent Health and Safety representative when required.</p>
                        <p class=" pb-2 ">We would work with you to tailor a package to ensure t  he most cost effective solution to meet your specific requirements and priorities.</p>
                        <p class=" pb-2 ">Call us on +254 715 742 898 to arrange for your no-obligation call-back from a member of our consultancy team – or email your contact details to info.ea@weareprotecafrica.com.</p>
                        <p class=" pb-2 ">We look forward to speaking to you soon.</p>     
                    </div>
                    
                </div>
            </div>
                 
        </div>

        

    </section>
</template>


<script>
import CourseCategory from '~/components/Course/CourseCategory'
export default {
    components: {
       
        CourseCategory
    }
}
</script>
