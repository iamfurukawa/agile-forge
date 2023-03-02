<script lang="ts">
    import UserLocalstorageService from "../../services/user/user-localstorage.service";

    import Login from "./login/login.svelte";
    import Register from "./register/register.svelte";
    import Resume from "./resume/resume.svelte";

    enum HomeAction {
        LOGIN,
        REGISTER,
        RESUME,
    }

    const user = UserLocalstorageService.get();
    let action = user ? HomeAction.RESUME : HomeAction.LOGIN;

    const changeAction = (event: any, newAction: HomeAction) => {
        event.preventDefault();
        action = newAction;
    };
</script>

<main>
    {#if action === HomeAction.REGISTER}
        <Register />
        <a href="#" on:click={(e) => changeAction(e, HomeAction.LOGIN)}
            >Já possuo cadastro.</a
        >
    {:else if action === HomeAction.RESUME}
        <Resume />
    {:else}
        <Login />
        <a href="#" on:click={(e) => changeAction(e, HomeAction.REGISTER)}
            >Ainda não tenho um cadastro.</a
        >
    {/if}
</main>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 80%;
    }
</style>
