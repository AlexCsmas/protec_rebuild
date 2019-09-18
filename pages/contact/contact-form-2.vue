<template>
    <form name="contact-form" netlify netlify-honeypot="bot-field" method="post">
        <div>
                <label for="">Name</label>
                <input type="hidden" name="name" value="name" />
                <label for="">Email</label>
                <input type="hidden" name="email" value="email" />
                <label for="">Message</label>
                <textarea name="message"></textarea>        
        </div>

    </form>
</template>