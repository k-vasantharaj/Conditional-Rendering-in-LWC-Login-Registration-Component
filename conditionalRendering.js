import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
isMemberLogin = false;
isNewMemberSignIn = false;
login;
userLogin;
password;
userPassword;
message;

newLoginChange(event){
    this.login = event.target.value;
}
newPasswordChange(event){
    this.password = event.target.value;
}
handleChangeRegister(event){
    if(this.login && this.password){
            alert(`Hello ${this.login} Successfully registered`);
            this.message= '';
        }
    else{
            this.message= ' Please enter the both username and password for successfull registeration';
        }
}
MemberCboxOnchange(event){
    this.isMemberLogin = event.target.checked;
    if(this.isMemberLogin){
        this.isNewMemberSignIn = false;
    }

}
newMemberCboxOnchange(event){
    this.isNewMemberSignIn = event.target.checked;
    if(this.isNewMemberSignIn){
        this.isMemberLogin = false;
    }
}
handleLoginChange(event){
    this.userLogin = event.target.value;
}

handlePwdChange(event){
    this.userPassword = event.target.value;
}
handleChangeLogin(event){
    
    if(this.login === this.userLogin){
        if(this.password === this.userPassword){
            alert('Welcome ✅ Login Successfully');
            this.message= '';
        }
        else{
            this.message= ' ❌ Invalid Password';
        }
    }
    else{
        this.message= ' ❌ Invalid UserName';
    }
}    
}
