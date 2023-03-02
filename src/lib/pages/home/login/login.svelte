<script lang="ts">
    import { Form, Input, FormGroup, Label, Button } from "sveltestrap";
    import FirebaseAuthService from "../../../services/firebase/firebase-auth.service";

    let email = "";
    let password = "";

    const signIn = async (event) => {
        event.preventDefault();

        if (email === "" || password === "") return;

        await FirebaseAuthService.signIn(email, password);
    };
</script>

<div class="form">
    <Form>
        <h1>Login</h1>
        <FormGroup>
            <Label for="email">Email</Label>
            <Input
                bind:value={email}
                type="email"
                name="email"
                id="email"
                placeholder="email"
            />
        </FormGroup>

        <FormGroup>
            <Label for="password">Password</Label>
            <Input
                bind:value={password}
                type="password"
                name="password"
                id="password"
                placeholder="password"
            />
        </FormGroup>

        <Button on:click={(e) => signIn(e)} type="primary">Sign in</Button>
    </Form>
</div>

<style lang="scss">
    .form {
        width: 400px;
    }
</style>
