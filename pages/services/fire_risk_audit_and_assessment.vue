<template>
    <section>
        <div class="w-full bg-white">

            <!-- title -->
			<div class="text-center px-6 py-12 bg-gray-100 border-b">
				<h1 class="font-display-italic font-extrabold text-4xl md:text-5xl leading-none py-4">Fire Risk Assessment / Fire Safety Audit</h1>
			</div>
			<!-- /title -->

        </div>

        <div class=" flex flex-col md:flex-row">
             <div class=" w-full  md:w-1/3 ">
                <div class=" bg-primary p-8 text-white">
                    <CourseCategory />
                </div>
            </div>

           <div class="w-full  md:w-2/3" >
                <div class="bg-gray-200 py-8">
                    <article class="px-10">
                       
                        <h3></h3>

                        <p>We are a leading International Health, Safety and Environmental Training and Consultancy
provider. </p>
                        
                        <p>The service we offer will develop your current systems, give guidance on improving your
documentation and safety culture, as well as providing a robust auditing program and acting as
your competent Health and Safety representative when required.</p>
                        <p>We would work with you to tailor a package to ensure the most cost effective solution to meet
your specific requirements and priorities.</p>
                        <p>Call us on +254 715 742 898 to arrange for your no-obligation call-back from a member of our
consultancy team – or email your contact details to  info.ea@weareprotecafrica.com</p>
                        <p>
We look forward to speaking to you soon..</p>

                    </article>                           
                </div>
            </div>          
        </div>

    </section>
</template>


<script>
import CourseCategory from '~/components/Service/CourseCategory'
import ContentPreview from '@/components/Service/ContentPreview'

export default {
    components: {
        ContentPreview, 
        CourseCategory
    }
}
</script>



