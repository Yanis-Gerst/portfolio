import { EmailConfig } from "../components/ContactForm/ContactForm.ts";
import emailJs from "@emailjs/browser";

export const sendEmail = (config: EmailConfig): Promise<any> => {
  const params = {
    from_name: config.name,
    from_email: config.from,
    message: config.body,
  };
  return emailJs.send("service_0rpn2m9", "template_afobyd9", params);
};

export const emailInit = () => {
  emailJs.init({
    publicKey: "fQQZDKxVjHxJbmOE6",
  });
};
