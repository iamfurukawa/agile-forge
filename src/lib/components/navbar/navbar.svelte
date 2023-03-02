<script lang="ts">
    import {
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
    } from "sveltestrap";
    import { navigate } from "svelte-navigator";
</script>

<nav>
    <h2>Agile Forge</h2>
    <div class="actions">
        <Dropdown>
            <DropdownToggle caret>Tools</DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Tools unused</DropdownItem>
                <DropdownItem on:click={() => navigate("/burnup")}>Burnup</DropdownItem>
                <DropdownItem header>Tools in use</DropdownItem>
                <DropdownItem on:click={() => navigate("/critical-path")}>Critical Path</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown>
            <DropdownToggle caret>Project Manager</DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Team</DropdownItem>
                <DropdownItem>External Dependencies</DropdownItem>
                <DropdownItem>Configuration</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</nav>

<style lang="scss">
    @import "../../shared/styles/colors.scss";

    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;

        gap: 10px;

        width: 100%;
        height: 60px;
        padding: 10px;
        background-color: $dark;

        h2 {
            color: white;
        }

        .actions {
            display: flex;
            align-items: center;

            gap: 10px;
        }
    }
</style>
