<template>
    <main class="flex items-center justify-center h-screen flex-col mt-20 font-['Libre_Franklin']">
        <img src="@/assets/images/logo.svg" alt="logo" class="content-center justify-center lg:w-24"/>
        <h1 class="text-2xl font-thin mt-14 text-gray lg:text-5xl">We are launching <span class="font-bold text-very-dark-blue">soon!</span></h1>
        <h2 class="text-sm mb-5 mt-4 lg:text-xl">Subscribe and get notified</h2>
        <form  class="flex flex-col content-center justify-center mt-5 lg:flex-row lg:w-637px">
        
           <input type="email" placeholder="Your email address..." class="peer border w-80 h-10 p-2 px-3 rounded-full border-pale-blue placeholder:text-gray lg:w-421px lg:h-56px" label="email"  required/>
             
           
      
            
        <button class="w-80 h-10 font-bold bg-blue p-2 px-3 rounded-full mt-4 text-white text-sm hover:bg-pale-blue lg:w-200px lg:h-56px lg:mt-0 lg:ml-6 drop-shadow-xl" >Notify me</button>
        </form>
        

        <img src="@/assets/images/illustration-dashboard.png" alt="dashboard illustration" class=" w-80 mt-20 lg:w-640px"/>
        <footer class="m-auto flex flex-col content-center justify-center">
            <div id="social-media" class=" flex flex-row  w-120px justify-center content-evenly mt-16">
                <img src="@/assets/images/facebook.png" alt="facebook" class="w-6y m-2 h-6"/>
                <img src="@/assets/images/twitter.png" alt="twitter" class="w-6 m-2 h-6"/>
                <img src="@/assets/images/instagram.png" alt="instagram" class="w-6 m-2 h-6"/>
            </div>
            <p class="text-gray font-thin text-xs mt-4">© Copyright Ping. All rights reserved.</p>
        </footer>
    </main>
</template>


<script>

export default {
    name: 'mainComponent', 
    
}
  
  
</script>
