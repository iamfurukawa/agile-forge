<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Navbar from "./lib/components/navbar/navbar.svelte";
  import Burnup from "./lib/pages/burnup/burnup.svelte";
  import CriticalPath from "./lib/pages/critical-path/critical-path.svelte";
  import Error from "./lib/pages/error/error.svelte";
  import Home from "./lib/pages/home/home.svelte";

  const routes = [
    { path: "/", component: Home },
    { path: "/critical-path", component: CriticalPath },
    { path: "/burnup", component: Burnup },
    { path: "*", component: Error },
  ];
</script>

<Router primary={false}>
  <Navbar />
  {#each routes as { path, component }}
    <Route {path} {component} />
  {/each}
</Router>
