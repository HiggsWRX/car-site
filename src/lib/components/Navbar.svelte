<script lang="ts">
    import Hamburguer from "./Hamburguer.svelte"
    import Logo from "./Logo.svelte"

    export let showSidebar = false
</script>

<header class="flex items-center h-10 bg-gray-300">
    <nav class="flex w-full justify-between">
        <Logo />
        <Hamburguer bind:open={showSidebar} />
    </nav>
</header>