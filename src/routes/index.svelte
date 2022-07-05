<script lang="ts">
    import Navbar from "../lib/components/Navbar.svelte"
    import Sidebar from "../lib/components/Sidebar.svelte"

    let showSidebar = false
</script>

<Sidebar bind:isOpen={showSidebar} />
<Navbar bind:showSidebar={showSidebar} />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
