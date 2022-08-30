<script>
	import TopContainers from "./topContainers.svelte";
	import BottomContainer from "./bottomContainer.svelte";
	import Topy from "./topy.svelte";
	import TopBackground from "./topBackground.svelte";
	
</script>

<style>
:global(body){
	--color-bg-toggle: linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    --background: hsl(0, 0%, 100%);
    --top-background-pattern: hsl(225, 100%, 98%);
    --card-background: hsl(227, 47%, 96%);
    --card-background-hover: hsl(227, 47%, 90%);
    --primary: hsl(230, 17%, 14%);
    --secondary: hsl(228, 12%, 44%);
  transition: background-color 0.3s
}
:global(body.dark-mode){
	--color-bg-toggle: linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    --background: hsl(230, 17%, 14%);
    --top-background-pattern: hsl(232, 19%, 15%);
    --card-background: hsl(228, 28%, 20%);
    --card-background-hover: hsl(228, 28%, 30%);
    --primary: hsl(0, 0%, 100%);
    --secondary: hsl(228, 34%, 66%);
}




</style>


	<main>
		
		<Topy/>
		<TopBackground/>
		
		<TopContainers/>
		<BottomContainer/>		 
	</main>

