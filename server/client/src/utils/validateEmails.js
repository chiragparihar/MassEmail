const re = 	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (recipients)=>{
    const invalidEmails = recipients.split(',').map(email => email.trim()).filter(email=> email.length > 0 && !re.test(email));
    if(invalidEmails.length){
        return `These emails are invalid:${invalidEmails}`;
    }
    return;
}