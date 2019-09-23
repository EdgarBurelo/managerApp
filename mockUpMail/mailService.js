module.exports = {
    sendMailToUser: (mail, username, DiscountGroupid) => {
        let Mail = `Dear ${username}
        You have subscribed with this email: ${mail}. Thanks to subscribe to the Discount Group, once the discount group is closed you'll recieve your discount code. 
        You can see the information of the http: //localhost:8080/${DiscountGroupid}/discount-group.
        Thanks for your preference`;
        console.log('Send Mail: ');
        console.log(Mail);
        return Mail
    },

    reminder: (user) => {
        let Mail = `Hey, get only 5 more people to sign up and get an additional 10% discount. Invite your friends!`;
        console.log(`Send: ${Mail} to ${user}`);
        return Mail
    },

    closeMail: (user, discount, code) => {
        let Mail = `Dear ${user}
            The Discount group has been closed, the discount your group will is ${discount}%, you can use it in our store https://www.amboss.com/us
            with the next code: ${code}`;
        console.log(`Send: ${Mail} to ${user}`);
        return Mail
    }
}