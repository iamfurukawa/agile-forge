<script lang="ts">
    import { Form, Input, FormGroup, Label, Button } from "sveltestrap";
    
    import FirebaseAuthService from "../../../services/firebase/firebase-auth.service";

    let email = "";
    let password = "";

    const register = async (event) => {
        event.preventDefault();

        if (email === "" || password === "") return;

        await FirebaseAuthService.register(email, password);
    };
</script>

<div class="form">
    <Form>
        <h1>Register</h1>
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

        <Button on:click={(e) => register(e)} type="primary">Sign up</Button>
    </Form>
</div>

<style lang="scss">
    .form {
        width: 400px;
    }
</style>
