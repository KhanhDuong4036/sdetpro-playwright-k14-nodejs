export default abstract class LoginPage {
    
    abstract inputUsername(username: string): void;
    abstract inputPassword(password: string): void;
    abstract clickOnLoginBtn(): void;

    login(username: string, password: string): void{
        this.inputUsername(username);
        this.inputPassword(password);
        this.clickOnLoginBtn();
    }
}