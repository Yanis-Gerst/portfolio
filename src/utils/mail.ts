import { EmailConfig } from "../components/ContactForm/ContactForm.ts";

export const sendEmail = (config: EmailConfig) => {
  // @ts-ignore
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "yanisgerst.pro@gmail.com",
    Password: "9B48F9938BAF916D19B8CCDBD7812C00A934",
    To: "yanisgerst.pro@gmail.com",
    From: "yanisgerst.pro@gmail.com",
    Subject: "Email from my portfolio website",
    Body: `From ${config.name}, ${config.from}: ${config.body}`,
  }).then((message: string) => alert(message));
};
