<template>
     <header class="bg-primary z-20 px-6 relative">

        <div class="container mx-auto flex justify-between items-center h-24 static">
  
          <a href="/" class="h-full flex text-white text-lg justify-center absolute left-0">
            <img src="https://res.cloudinary.com/alexoc/image/upload/v1563162452/Protec%20EA%20Logo.svg" class="h-40 md:h-32" />
          </a>
  
          <ul class="hidden md:flex flex-1 h-full justify-end items-center text-white text-xl">
            
            <li>
                <nuxt-link to="/" class="hover:opacity-75">Home</nuxt-link>
            </li>
            <li class="ml-6">
                  <nuxt-link to="/about">About Us</nuxt-link>
            </li>
             <li class="ml-6">
                <nuxt-link to="/services">Services</nuxt-link>
            </li>
            <li class="ml-6">
                <nuxt-link to="/courses">Courses</nuxt-link>
            </li>
           <li class="ml-6">
                <nuxt-link to="/latest_news">Latest News</nuxt-link>
            </li>

            <li class="ml-6 flex justify-end">

                 <nuxt-link to="/contact" class="hidden md:block bg-secondary text-white py-2 px-4 text-xs md:text-xl rounded-r rounded-l ml-3 hover:shadow-lg">Contact Us</nuxt-link>
                 
            </li>
          </ul>
  
          <a href="#" class="md:hidden">
            <img class="w-8 h-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACCSURBVHhe7dmhDYBQAEPBv//SIGsaDGlA3CVPd4AeAAAAAAAAAOA/Lj0210aV5tqo0lwbVZpro0pzbVQJAAAAAAAAeKXdcEpzbVRpro0qzbVRpbk2qjTXRpUAAAAAAACAV9oNpzTXRpXm2qjSXBtVmmujSnNtVAkAAAAAAAAA+N45N+IVCzyqwPF8AAAAAElFTkSuQmCC">
          </a>
  
        </div>
      </header> <!-- End of Header -->
</template>
