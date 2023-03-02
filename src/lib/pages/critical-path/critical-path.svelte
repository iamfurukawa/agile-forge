<script lang="ts">
    import Sigma from "sigma";
    import { onMount } from "svelte";
    import GraphService from "../../services/graph/graph.service";

    let container;

    onMount(() => {
        const graph = GraphService.getData();

        //this const render a graph in container
        const renderer = new Sigma(graph, container);
    });
</script>

<div id="sigma-container" bind:this={container} />

<style lang="scss">
    #sigma-container {
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>
